<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Project;
use App\Models\Announcement;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Seed Projects
        $projects = [
            [
                'id' => 1,
                'title' => 'YÜZAG Hatıra Ormanları',
                'short_desc' => 'Geleceğe nefes olmak, toprağa emanet bırakmak...',
                'image' => 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Devam Ediyor',
                'date' => '2026',
                'location' => 'Bilecik / Çekmeköy',
                'sort_order' => 1,
                'tabs' => [
                    'asamalar' => '<p>Geleceğe nefes olmak, toprağa emanet bırakmak... YÜZAG Hatıra Ormanları projesi, yanan alanları yeşertmek ve gelecek nesillere kalıcı bir hatıra bırakmak amacıyla hayata geçirilmiştir.</p><p>Etkiler ve Kazanımlar: Bu proje, yalnızca ağaç dikmekten ibaret değildir; toplumun her kesiminden bireyleri çevre bilinci etrafında birleştiren, doğaya karşı sorumluluğumuzu hatırlatan güçlü bir sosyal hareket alanıdır. Dikilen her fidan, yarınlara nefes olurken; bu topraklarda yaşayan çocuklarımıza da ‘kök salmak’ ve ‘emanete sahip çıkmak’ bilincini aşılamaktadır.</p>',
                    'etkinlikler' => '<ul><li><strong>13 Aralık 2026:</strong> Bilecik Osmaniye’de YÜZAG Hatıra Ormanı Fidan Dikimi. Peygamber Efendimiz’in (sav) mübarek sözünü rehber edinerek çıktığımız bu yolda, her fidan geleceğe bırakacağımız en güzel miras oldu.</li><li><strong>26 Nisan 2026:</strong> Çekmeköy Bin Fidan Bin Umut YÜZAG 2. Hatıra Ormanı. Bu ormanımızı Şanlıurfa ve Kahramanmaraş\'ta yaşanan silahlı saldırı sonucu hayatını kaybeden kıymetli Ayla öğretmenimize ve yavrularımıza ithaf ediyoruz.</li></ul>',
                    'gorevAlanlar' => '<p>Genel Başkanımız <strong>Güleser Topuz</strong> öncülüğünde, YÜZAG gönüllülerinin katkılarıyla hayata geçirilmiştir.</p>',
                    'iletisim' => '<p>Sosyal Medya Bağlantılarımız:</p><ul><li><a href=\'https://www.instagram.com/p/DSSndLsDBAG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==\' target=\'_blank\'>Bilecik Osmaniye Fidan Dikimi</a></li><li><a href=\'https://www.instagram.com/p/DXMdZXbjMl-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==\' target=\'_blank\'>Çekmeköy 2. Hatıra Ormanı</a></li></ul>'
                ]
            ],
            [
                'id' => 2,
                'title' => 'İyilikte Hep Birlikte Projesi',
                'short_desc' => 'Kapılar Çalınıyor, Gönüller Alınıyor: Toplumsal Dayanışmada Yeni Bir Model',
                'image' => 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Devam Ediyor',
                'date' => '2025-2026',
                'location' => 'İstanbul Geneli',
                'sort_order' => 2,
                'tabs' => [
                    'asamalar' => '<p>Türkiye’de sosyal yardım sistemleri çoğu zaman kurumsal ve mesafeli bir yapıya sahiptir. YÜZAG olarak bizler, iyiliğin yalnızca bir yardım paketi teslim etmek olmadığına; asıl değerin, ihtiyaç sahibinin kapısını çalmak, onu dinlemek ve göz göze gelerek bir nebze de olsa yalnız olmadığını hissettirmek olduğuna inanıyoruz. “İyilikte Hep Birlikte” projesi, bu felsefeyle; maddi desteği manevi yakınlıkla birleştiren, “insan merkezli” bir sosyal yardım modeli olarak tasarlanmıştır.</p><p>Proje kapsamında ihtiyaç sahibi ailelere ulaşmak için sistematik bir saha çalışması yürütülmüştür.</p>',
                    'etkinlikler' => '<ul><li><strong>Dağıtımlar:</strong> 750 gıda kolisi ilçe bazında dağıtılmıştır (Kağıthane, Başakşehir, Küçükçekmece vb.). 500 market kartı ihtiyaç sahiplerine ulaştırılmıştır. 3000 adet gıda kolisi, 2500 alışveriş kartı dağıtılmıştır.</li><li><strong>Ziyaretler:</strong> 10 aile evlerinde ziyaret edilerek özel ihtiyaçlarına yönelik destek sağlanmıştır.</li><li><strong>Ramazan Desteği:</strong> 400 adet meyve suyu kolisi Sultanbeyli ve Kağıthane’deki ailelerimize ulaştırılmıştır.</li><li><strong>Diğer Yardımlar:</strong> 10 engelli sandalyesi, 3 hasta yatağı, 5 öğrenci bursu, 3 haneye tam ev eşyası desteği.</li></ul>',
                    'gorevAlanlar' => '<p>Sosyal Hizmetler Komisyonu Başkanı <strong>Meryem Tekbıyık</strong> ve Yaşlı ve Engelliler Koordinasyon Başkanı <strong>Tekin Sağlam</strong> önderliğinde yürütülmüştür.</p><p>Saha Gönüllüleri: Emine Hancı, Esra Keleşoğlu, Emine Tanrıkulu, Ayşe Kabakoç, Şengül Kazanır, Güleser Topuz, Tuba Gümüş.</p>',
                    'iletisim' => '<p>Sosyal Medya Bağlantılarımız:</p><ul><li><a href=\'https://www.instagram.com/reel/DSAv90TDB29/\' target=\'_blank\'>İyilikte Hep Birlikte Video 1</a></li><li><a href=\'https://www.instagram.com/reel/DSX22dgDM_n/\' target=\'_blank\'>İyilikte Hep Birlikte Video 2</a></li></ul>'
                ]
            ],
            [
                'id' => 3,
                'title' => 'Akran Nezaketi Projesi',
                'short_desc' => 'Drama ve Empatiyle Zorbalığa Karşı Kalıcı Çözüm',
                'image' => 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Tamamlandı',
                'date' => '2026',
                'location' => 'İstanbul / Üsküdar',
                'sort_order' => 3,
                'tabs' => [
                    'asamalar' => '<p>Akran zorbalığı; fiziksel, sözlü, sosyal ve siber mecralarda giderek artan bir halk sağlığı sorunu haline gelmiştir. YÜZAG olarak, bu soruna yalnızca yüzeysel seminerlerle değil; kalıcı davranış değişikliği yaratacak bilimsel ve uygulamalı bir modelle müdahale etme kararı aldık.</p><p>Bilimsel Altyapı ve Uygulama Yöntemi: Proje, Millî Eğitim Bakanlığı ve Marmara Üniversitesi Atatürk Eğitim Fakültesi iş birliğiyle yürütülmektedir. Müfredatın temeli, alanında uzman akademisyenler tarafından hazırlanmış olup; drama, doğaçlama ve rol oynama teknikleriyle çocukların konuya aktif katılımı sağlanmaktadır.</p>',
                    'etkinlikler' => '<ul><li><strong>Pilot Uygulama:</strong> İlk uygulama, İstanbul Üsküdar ilçesinde Dilaver Cebeci İlkokulu ve Kadriye Mehmet Koparan İlkokulu’nda 3. ve 4. sınıflarda 10 hafta süresince uygulanmıştır.</li><li><strong>Sonuçlar:</strong> Yapılan ön test ve son test değerlendirmelerinde, öğrencilerin empati kurma becerilerinde, sınır tanıma bilinçlerinde ve yardım isteme reflekslerinde anlamlı ve ölçülebilir bir artış gözlemlenmiştir.</li></ul>',
                    'gorevAlanlar' => '<p>Proje Koordinatörümüz: <strong>Av. Fatma Doydu Aksu</strong></p><p>Yürütücüler: Av. Şeyma Saka, Av. Melike Torun, Av. Zeynep Paşahan ve Av. Zeynep Aygür.</p><p>İçerik Ekibi: Marmara Üniversitesi’nden Prof. Dr. Bilal Yorulmaz ile drama eğitmenlerimiz Ebru Albayrak ve Emre Berber. Prof. Dr. Özkan Sapsağlam, Doç. Dr. Handan Yalvaç Arıcı.</p>',
                    'iletisim' => '<p>Proje hakkında detaylar:</p><ul><li><a href=\'https://www.instagram.com/p/DVtT5sPDJ-4/\' target=\'_blank\'>Akran Nezaketi Gönderisi</a></li></ul>'
                ]
            ],
            [
                'id' => 4,
                'title' => 'Genç Bir Hal Ustadan Gence Zirveye Yolculuk',
                'short_desc' => 'İlham Veren Liderlerle Geleceğin Rotasını Çizmek',
                'image' => 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Devam Ediyor',
                'date' => '2025-2026',
                'location' => 'İstanbul Geneli',
                'sort_order' => 4,
                'tabs' => [
                    'asamalar' => '<p>Günümüz gençliği, bilgiye kolayca ulaşsa da doğru rol modelleri bulmakta ve kariyer yolculuklarında rehberlik almakta zorlanmaktadır. “Genç Bir Hal: Ustadan Gence Zirveye Yolculuk” serisi, bu ihtiyaca yanıt vermek; farklı alanlarda çığır açmış, vizyon sahibi isimleri gençlerle buluşturarak onların ufkunu genişletmek ve motivasyonlarını ateşlemek amacıyla tasarlanmıştır.</p>',
                    'etkinlikler' => '<ul><li><strong>İlker Astarcı:</strong> Türkiye Ulusal Ajansı Başkanı – Deneyim, vizyon ve uluslararası projeler üzerine ilham veren bir söyleşi.</li><li><strong>Abdurrahman Uzun:</strong> Adalet, vicdan, toplumsal sorumluluk ve aktif duruş üzerine ufuk açıcı sohbetler.</li><li><strong>Prof. Dr. Ayşe Derya Kahraman:</strong> Girişimcilik Eğitimi ile gençlere somut rehberlik.</li><li><strong>Ali Çelik:</strong> Rami Kütüphanesi Müdürü – Kültürel miras ve okuma kültürü.</li></ul>',
                    'gorevAlanlar' => '<p>YÜZAG Gençlik Komisyonu Başkanımız <strong>Merve Şivetoğlu</strong> ve ekibi (Hasan Said Yusuf, Halit Ersoy, Yunus Emre Muti, Ceren Aslantaş) tarafından organize edilmiştir. Programların açılış konuşmaları Genel Başkanımız <strong>Güleser Topuz</strong> tarafından gerçekleştirilmiştir.</p>',
                    'iletisim' => '<p>Bağlantılar:</p><ul><li><a href=\'https://www.instagram.com/p/DUL7CYUjJ47/\' target=\'_blank\'>Genç Bir Hal Gönderisi</a></li></ul>'
                ]
            ],
            [
                'id' => 5,
                'title' => 'Ben’den Biz’e: Ailede Birlik Yolculuğu',
                'short_desc' => 'Uluslararası Bir Köprü: Diasporadan Anavatana Aile Değerleri',
                'image' => 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Tamamlandı',
                'date' => '01 Kasım 2025',
                'location' => 'Duisburg, Almanya',
                'sort_order' => 5,
                'tabs' => [
                    'asamalar' => '<p>Modern dünyanın bireyselleşme baskısı, aile kurumunu her geçen gün daha kırılgan hale getirmektedir. YÜZAG ve UEYM (Uluslararası Eğitim ve Yazarlar Merkezi) iş birliğiyle hayata geçirilen “Ben’den Biz’e: Ailede Birlik Yolculuğu” projesi, uluslararası düzeyde aile içi iletişimi güçlendiren bir farkındalık hareketidir.</p><p>Duisburg Gençlik Başkanlığı, iki ülke arasında kültürel bir köprü görevi üstlenmiştir.</p>',
                    'etkinlikler' => '<ul><li><strong>Etkinlik:</strong> 01 Kasım 2025’te Almanya’nın Duisburg kentinde, DİTİB Yıldırım Beyazıt Camii’nde düzenlendi.</li><li><strong>İçerik:</strong> Nesiller arası iletişinin önemi, aile içi dayanışmanın toplumsal huzura etkisi ve göçmen ailelerin karşılaştığı kimlik bunalımlarına dair çözüm önerileri ele alınmıştır.</li></ul>',
                    'gorevAlanlar' => '<p>YÜZAG Genel Başkanımız <strong>Güleser Topuz</strong> ve UEYM Genel Başkanı <strong>Kübra Hülya Arıcı Sorrentino</strong> konuşmacı olarak yer almıştır.</p>',
                    'iletisim' => '<p>Bağlantılar:</p><ul><li><a href=\'https://www.instagram.com/reel/DQkY9LJDPbq/\' target=\'_blank\'>Ailede Birlik Yolculuğu Video</a></li></ul>'
                ]
            ],
            [
                'id' => 6,
                'title' => 'Ramazan Sofrasında Umut ve İlham',
                'short_desc' => 'Kardeşlik Sofrasında 191 Yüreğe Dokunmak',
                'image' => 'https://images.unsplash.com/photo-1541804245600-080838848a60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Tamamlandı',
                'date' => 'Ramazan Ayı',
                'location' => 'İstanbul Geneli',
                'sort_order' => 6,
                'tabs' => [
                    'asamalar' => '<p>Ramazan ayı, bereketin ve paylaşmanın yanı sıra toplumsal yaraların sarıldığı müstesna bir zaman dilimidir. YÜZAG olarak bu ruhu yaşatmak amacıyla “Birlikte Kardeşçe Elele” ve “Bir İftar, Bin Umut” sloganlarıyla büyük bir iftar organizasyonuna imza attık. Bu buluşma, dezavantajlı ve parçalanmış aile yapısına sahip bireyleri gönüllülerle bir araya getirmiştir.</p>',
                    'etkinlikler' => '<ul><li><strong>İftar Programı:</strong> Geleneksel Ramazan kültürü ile modern psiko-sosyal destek teknikleri harmanlanmıştır. İnteraktif yarışmalar (“En güzel Ramazan manisi”) düzenlenmiştir.</li><li><strong>Destekler:</strong> Ailelere sunulan nevresim takımları ve alışveriş kartları ile Ramazan bereketi somut bir karşılık bulmuştur. 191 kardeşimiz katılmıştır.</li></ul>',
                    'gorevAlanlar' => '<p>Genel Başkanımız <strong>Güleser Topuz</strong> ve Başkan Yardımcımız <strong>Av. Fatma Doydu Aksu</strong> koordinasyonunda gerçekleşmiştir.</p><p>Sosyal Hizmetler, Aile Komisyonu, Yaşlı ve Engelliler Komisyonu, Gençlik Komisyonu üyeleri görev almıştır.</p>',
                    'iletisim' => '<p>Bağlantılar:</p><ul><li><a href=\'https://www.instagram.com/reel/DVV2QNvjDEe/\' target=\'_blank\'>İftar Buluşması Video</a></li></ul>'
                ]
            ],
            [
                'id' => 7,
                'title' => 'Nesiller Arası Köprü: Bir Aile – Bir Çınar',
                'short_desc' => 'Geçmişin bilgeliği ile geleceğin heyecanını aynı sofrada buluşturuyoruz.',
                'image' => 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Devam Ediyor',
                'date' => '2026',
                'location' => 'Darülaceze / İstanbul',
                'sort_order' => 7,
                'tabs' => [
                    'asamalar' => '<p>Huzurevlerinde kalan büyüklerimiz çoğu zaman yalnızca bakım hizmeti alıcısı olarak görülmekte; hayat tecrübeleri, anıları ve becerileri genç nesillere aktarılamamaktadır. “Bir Aile – Bir Çınar” projesi, bu klasik anlayışı tersine çeviren, yaşlılarımızı birer “deneyim aktarıcısı” konumuna yükselten özgün bir sosyal inovasyon modelidir.</p><p>YÜZAG ve Darülaceze Başkanlığı iş birliğiyle yürütülen projede, 10 gönüllü aile ile 10 Darülaceze sakini eşleştirilmiştir.</p>',
                    'etkinlikler' => '<ul><li><strong>1. Buluşma:</strong> Darülaceze Okmeydanı Yerleşkesi. Çay-simit toplantısı ile aileler ve büyüklerimiz eşleşmiştir.</li><li><strong>2. Buluşma:</strong> Boğaz Gemi Turu. Valide Sultan Gemisi ile kültürel bir anlatı gerçekleştirilmiştir.</li><li><strong>Gelecek Buluşmalar:</strong> El Sanatları ve Dijital Anı Atölyesi, Kültürel Gezi ve Miras Gözlemi, Nesiller Arası Mutfak Atölyesi, Nesiller Arası Kalıcı İzler Kapanış Töreni.</li></ul>',
                    'gorevAlanlar' => '<p>Proje; Genel Başkanımız <strong>Güleser Topuz</strong> himayesinde, Aile Komisyonu Başkanımız <strong>Esma Budak</strong> liderliğinde yürütmektedir.</p><p>Darülaceze Adına: Darülaceze Başkanı Esra Ceceli İslam, Başkan Yardımcısı Gülten Terzi.</p>',
                    'iletisim' => '<p>Bağlantılar:</p><ul><li><a href=\'https://www.instagram.com/p/DW4bdZQjBE0/\' target=\'_blank\'>Bir Aile Bir Çınar 1</a></li><li><a href=\'https://www.instagram.com/reel/DWweA4hjG3v/\' target=\'_blank\'>Bir Aile Bir Çınar 2</a></li></ul>'
                ]
            ],
            [
                'id' => 8,
                'title' => 'Geniş Aile: Köklerden Geleceğe',
                'short_desc' => 'Hafıza, Kimlik ve Gelecek',
                'image' => 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Tamamlandı',
                'date' => 'Aralık 2025 – Temmuz 2026',
                'location' => 'Türkiye / Avrupa Diasporası',
                'sort_order' => 8,
                'tabs' => [
                    'asamalar' => '<p>Türk toplumunun bin yıllık medeniyet birikiminin en temel yapı taşı olan geniş aile, derin bir dönüşüm geçirmektedir. Bu aidiyet krizi ve değer erozyonu getirmektedir. Proje, geniş aileyi bir aidiyet kaynağı olarak yeniden tanımlamayı hedefleyen disiplinlerarası bir uygulamadır. İstanbul Medeniyet Üniversitesi’nin akademik güvencesiyle yürütülmüştür.</p>',
                    'etkinlikler' => '<ul><li><strong>1. Aşama: Sanatsal İfade (Afiş Yarışması):</strong> Üniversite öğrencilerinin katıldığı ulusal afiş tasarım yarışması. 35 eser sergilenmiştir.</li><li><strong>2. Aşama: Geniş Aile Çalıştayı:</strong> 6 farklı tematik masa etrafında, 20 akademisyen eşliğinde gençler geniş aile kavramını tartışmıştır.</li><li><strong>3. Aşama: Aytepe Gençlik Kampı:</strong> Doğayla iç içe kampa gidilmiştir.</li></ul>',
                    'gorevAlanlar' => '<p>Genel Başkan: <strong>Güleser Topuz</strong>. Proje Koordinatörü: <strong>Av. Fatma Doydu Aksu</strong>.</p><p>Düzenleme Kurulu: Prof. Dr. Mahmut Hakkı Akın, Prof. Dr. Ayşe Derya Kahraman, Doç. Dr. Handan Yalvaç Arıcı ve diğer akademisyenler.</p>',
                    'iletisim' => '<p>Bağlantılar:</p><ul><li><a href=\'https://www.instagram.com/p/DXtTeRfjOPQ/\' target=\'_blank\'>Geniş Aile Gönderisi</a></li></ul>'
                ]
            ],
            [
                'id' => 9,
                'title' => 'Anneye Nefes',
                'short_desc' => 'Tükenmiş Annelere, Kimsesizlere Psiko-Sosyal Bir Soluk',
                'image' => 'https://images.unsplash.com/photo-1544027993-37db48d5f0b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Devam Ediyor',
                'date' => '2026',
                'location' => 'İstanbul',
                'sort_order' => 9,
                'tabs' => [
                    'asamalar' => '<p>“Anneye Nefes” projesi, engelli veya yaşlı yakınına evde bakım veren ve tükenmişlik yaşayan annelerimize psiko-sosyal destek alanları açmaktadır.</p>',
                    'etkinlikler' => '<ul><li><strong>1. ADIM:</strong> Anneler Günü’nde Semiha Şakir Huzurevi Ziyareti. Gönüllülerimiz annelerimizi yalnız bırakmamıştır.</li><li><strong>2. ADIM:</strong> Mandala boyama ve sanat terapileri düzenlenmiştir.</li></ul>',
                    'gorevAlanlar' => '<p>Genel Başkanımız <strong>Güleser Topuz</strong> ve Aile ve Eğitimden Sorumlu Bşk. Yrd. <strong>Esma Budak</strong> öncülüğünde, Suzan Özçelik, Hatice Özarık ve Uzm. Özlem Koşal’ın emekleriyle yapılmıştır.</p>',
                    'iletisim' => '<p>Bağlantılar:</p><ul><li><a href=\'https://www.instagram.com/reel/DYNMCTqs8ll/\' target=\'_blank\'>Anneye Nefes Video</a></li></ul>'
                ]
            ],
            [
                'id' => 10,
                'title' => 'Fatih\'te Zarafet ve Etik Rüzgârı',
                'short_desc' => 'Mahremiyet ve Nezaket Modeli',
                'image' => 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Tamamlandı',
                'date' => '11 Aralık 2025',
                'location' => 'Fatih / İstanbul',
                'sort_order' => 10,
                'tabs' => [
                    'asamalar' => '<p>YÜZAG Eğitim ve Aile Komisyonu tarafından geliştirilen bu proje, Türkiye’deki eğitim sahasında bir ilk olma niteliği taşıyan özgün bir sosyal inovasyon modelidir.</p>',
                    'etkinlikler' => '<ul><li>Bedensel, mekân, dijital ve duygusal mahremiyet dersleri, P4C metotları ve yaratıcı drama uygulamaları yapılmıştır.</li></ul>',
                    'gorevAlanlar' => '<p>İçerik tasarımı ve materyal geliştirme Genel Başkan Yardımcısı ve yazar <strong>Esma Budak</strong>’a aittir.</p>',
                    'iletisim' => '<p>Bağlantılar:</p><ul><li><a href=\'https://www.instagram.com/p/DZvcigKjKcO/\' target=\'_blank\'>Zarafet ve Etik Gönderisi</a></li></ul>'
                ]
            ]
        ];

        foreach ($projects as $proj) {
            Project::create($proj);
        }

        // 2. Seed Announcements
        $announcements = [
            [
                'id' => 101,
                'title' => 'Yaz Kampı Kayıtları Başladı',
                'short_desc' => 'Gençlik Gelişim Akademisi kapsamında düzenleyeceğimiz yaz kampı kayıtları tüm hızıyla devam ediyor. Kontenjan dolmadan yerinizi alın.',
                'image' => 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Yeni',
                'date' => '20 Temmuz 2026',
                'location' => 'Kocaeli / Aytepe',
                'sort_order' => 1
            ],
            [
                'id' => 102,
                'title' => 'Aylık Gönüllü Toplantısı',
                'short_desc' => 'Aylık olağan gönüllü istişare ve değerlendirme toplantımız bu hafta sonu dernek merkezimizde gerçekleştirilecektir.',
                'image' => 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Yakında',
                'date' => '25 Temmuz 2026',
                'location' => 'Dernek Merkezi',
                'sort_order' => 2
            ],
            [
                'id' => 103,
                'title' => 'Köy Okulları İçin Kitap Kampanyası',
                'short_desc' => 'Köy okullarına kütüphane kurmak için başlattığımız kitap toplama kampanyasına siz de destek olabilirsiniz.',
                'image' => 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                'status' => 'Devam Ediyor',
                'date' => 'Ağustos 2026',
                'location' => 'Tüm Türkiye',
                'sort_order' => 3
            ]
        ];

        foreach ($announcements as $ann) {
            Announcement::create($ann);
        }
    }
}
