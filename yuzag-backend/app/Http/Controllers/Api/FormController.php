<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Volunteer;
use App\Models\ContactMessage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    public function submitVolunteer(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'tc' => 'required|digits:11',
            'ad_soyad' => 'required|string|max:255',
            'dogum_tarihi' => 'required|date',
            'aktif_ogrenci' => 'required|boolean',
            'okul' => 'required|string|max:255',
            'ogrenim_durumu' => 'required|string',
            'dil_1' => 'nullable|string|max:255',
            'dil_seviye_1' => 'nullable|string',
            'dil_2' => 'nullable|string|max:255',
            'dil_seviye_2' => 'nullable|string',
            'tel' => 'required|string|regex:/^05[0-9]{9}$/',
            'email' => 'required|email|max:255',
            'il' => 'required|string|max:255',
            'ref_ad_1' => 'required|string|max:255',
            'ref_tel_1' => 'required|string|regex:/^05[0-9]{9}$/',
            'ref_ad_2' => 'nullable|string|max:255',
            'ref_tel_2' => 'nullable|string|regex:/^05[0-9]{9}$/',
            'faaliyetler' => 'required|array',
            'motivasyon' => 'required|string',
            'is_youth' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Lütfen formu eksiksiz ve kurallara uygun doldurunuz.',
                'errors' => $validator->errors()
            ], 422);
        }

        // Custom validation check: age between 18-29 for youth volunteers
        if ($request->input('is_youth')) {
            $birthDate = new \DateTime($request->input('dogum_tarihi'));
            $today = new \DateTime();
            $age = $today->diff($birthDate)->y;
            
            if ($age < 18 || $age > 29) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Genç YÜZAG başvuruları 18-29 yaş arası için geçerlidir.'
                ], 422);
            }
        }

        $volunteer = Volunteer::create($request->all());

        // E-posta gönderim bildirimi
        try {
            $toEmail = env('MAIL_TO_ADDRESS', 'info@yuzag.org');
            $subject = 'Yeni Gönüllü Başvurusu: ' . $request->input('ad_soyad');
            $content = "Yeni Gönüllü Başvurusu Alındı:\n\n" .
                       "Ad Soyad: " . $request->input('ad_soyad') . "\n" .
                       "E-posta: " . $request->input('email') . "\n" .
                       "Telefon: " . $request->input('tel') . "\n" .
                       "Şehir: " . $request->input('il') . "\n" .
                       "Okul / Öğrenim: " . $request->input('okul') . "\n" .
                       "Motivasyon: " . $request->input('motivasyon');

            Mail::raw($content, function ($message) use ($toEmail, $subject, $request) {
                $message->to($toEmail)
                        ->subject($subject)
                        ->replyTo($request->input('email'), $request->input('ad_soyad'));
            });
        } catch (\Exception $e) {
            // E-posta gönderimi başarısız olsa dahi kayıt işlemi engellenmesin
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Başvurunuz başarıyla alındı! Teşekkür ederiz.'
        ]);
    }

    public function submitContactMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'ad_soyad' => 'required|string|min:2|max:255',
            'email' => 'required|email|max:255',
            'tel' => 'nullable|string|regex:/^[0-9\s\+\-\(\)]{10,15}$/',
            'konu' => 'nullable|string|max:255',
            'mesaj' => 'required|string|min:10|max:1000',
        ], [
            'ad_soyad.required' => 'Ad soyad alanı zorunludur.',
            'ad_soyad.min' => 'Ad soyad en az 2 karakter olmalıdır.',
            'email.required' => 'E-posta alanı zorunludur.',
            'email.email' => 'Geçerli bir e-posta adresi giriniz.',
            'tel.regex' => 'Geçerli bir telefon numarası giriniz (10-15 hane).',
            'mesaj.required' => 'Mesaj alanı zorunludur.',
            'mesaj.min' => 'Mesajınız en az 10 karakter olmalıdır.',
            'mesaj.max' => 'Mesajınız en fazla 1000 karakter olabilir.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Lütfen formu kurallara uygun doldurunuz.',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            ContactMessage::create($request->all());
        } catch (\Exception $e) {
            // Log or continue if standalone DB is optional
        }

        // E-posta gönderim bildirimi
        try {
            $toEmail = env('MAIL_TO_ADDRESS', 'info@yuzag.org');
            $subject = 'Yeni İletişim Formu Mesajı: ' . ($request->input('ad_soyad') ?? 'Misafir');
            $content = "Yeni İletişim Mesajı Alındı:\n\n" .
                       "Ad Soyad: " . $request->input('ad_soyad') . "\n" .
                       "E-posta: " . $request->input('email') . "\n" .
                       "Telefon: " . ($request->input('tel') ?? '-') . "\n" .
                       "Mesaj:\n" . $request->input('mesaj');

            Mail::raw($content, function ($message) use ($toEmail, $subject, $request) {
                $message->to($toEmail)
                        ->subject($subject)
                        ->replyTo($request->input('email'), $request->input('ad_soyad'));
            });
        } catch (\Exception $e) {
            // E-posta gönderimi başarısız olsa dahi işlem engellenmesin
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Mesajınız başarıyla iletildi. En kısa sürede sizinle iletişime geçilecektir.'
        ]);
    }
}

