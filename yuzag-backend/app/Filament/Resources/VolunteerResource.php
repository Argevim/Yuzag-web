<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VolunteerResource\Pages;
use App\Filament\Resources\VolunteerResource\RelationManagers;
use App\Models\Volunteer;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class VolunteerResource extends Resource
{
    protected static ?string $model = Volunteer::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationLabel = 'Gönüllüler';

    protected static ?string $pluralLabel = 'Gönüllüler';

    protected static ?string $modelLabel = 'Gönüllü';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Başvuru Tipi')
                    ->schema([
                        Forms\Components\Toggle::make('is_youth')
                            ->label('Genç YÜZAG Gönüllüsü mü?')
                            ->required(),
                    ]),
                
                Forms\Components\Section::make('Kişisel Bilgiler')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('tc')
                            ->label('TC Kimlik No')
                            ->length(11)
                            ->required(),
                        Forms\Components\TextInput::make('ad_soyad')
                            ->label('Ad Soyad')
                            ->required(),
                        Forms\Components\DatePicker::make('dogum_tarihi')
                            ->label('Doğum Tarihi')
                            ->required(),
                        Forms\Components\Toggle::make('aktif_ogrenci')
                            ->label('Aktif Öğrenci mi?')
                            ->required(),
                        Forms\Components\TextInput::make('okul')
                            ->label('Okul / Mezun Olunan Okul')
                            ->required(),
                        Forms\Components\Select::make('ogrenim_durumu')
                            ->label('Öğrenim Durumu')
                            ->options([
                                'İlköğretim' => 'İlköğretim',
                                'Lise' => 'Lise',
                                'Ön Lisans' => 'Ön Lisans',
                                'Lisans' => 'Lisans',
                                'Yüksek Lisans' => 'Yüksek Lisans',
                                'Doktora' => 'Doktora',
                            ])
                            ->required(),
                    ]),

                Forms\Components\Section::make('Yabancı Dil Bilgileri')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('dil_1')
                            ->label('1. Yabancı Dil'),
                        Forms\Components\Select::make('dil_seviye_1')
                            ->label('Seviye')
                            ->options([
                                'Düşük' => 'Düşük',
                                'Orta' => 'Orta',
                                'İyi' => 'İyi',
                            ]),
                        Forms\Components\TextInput::make('dil_2')
                            ->label('2. Yabancı Dil'),
                        Forms\Components\Select::make('dil_seviye_2')
                            ->label('Seviye')
                            ->options([
                                'Düşük' => 'Düşük',
                                'Orta' => 'Orta',
                                'İyi' => 'İyi',
                            ]),
                    ]),

                Forms\Components\Section::make('İletişim Bilgileri')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('tel')
                            ->label('Telefon')
                            ->tel()
                            ->required(),
                        Forms\Components\TextInput::make('email')
                            ->label('E-Posta')
                            ->email()
                            ->required(),
                        Forms\Components\TextInput::make('il')
                            ->label('Yaşadığı İl')
                            ->required(),
                    ]),

                Forms\Components\Section::make('Referans Bilgileri')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('ref_ad_1')
                            ->label('1. Referans Ad Soyad')
                            ->required(),
                        Forms\Components\TextInput::make('ref_tel_1')
                            ->label('1. Referans Telefon')
                            ->tel()
                            ->required(),
                        Forms\Components\TextInput::make('ref_ad_2')
                            ->label('2. Referans Ad Soyad'),
                        Forms\Components\TextInput::make('ref_tel_2')
                            ->label('2. Referans Telefon')
                            ->tel(),
                    ]),

                Forms\Components\Section::make('Katılım Detayları')
                    ->schema([
                        Forms\Components\Select::make('faaliyetler')
                            ->label('Öncelikli Faaliyet Alanları')
                            ->multiple()
                            ->options([
                                'Eğitim Faaliyetleri' => 'Eğitim Faaliyetleri',
                                'Saha Çalışmaları' => 'Saha Çalışmaları',
                                'Sosyal Sorumluluk Projeleri' => 'Sosyal Sorumluluk Projeleri',
                                'Tahlil ve Kritik Etkinlikleri' => 'Tahlil ve Kritik Etkinlikleri',
                                'Akademik Çalışmalar' => 'Akademik Çalışmalar',
                            ])
                            ->required(),
                        Forms\Components\Textarea::make('motivasyon')
                            ->label('Gönüllü Olma Motivasyonu')
                            ->rows(5)
                            ->required(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('ad_soyad')
                    ->label('Ad Soyad')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('email')
                    ->label('E-Posta')
                    ->searchable(),
                Tables\Columns\TextColumn::make('tel')
                    ->label('Telefon'),
                Tables\Columns\TextColumn::make('il')
                    ->label('İl')
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_youth')
                    ->label('Genç Gönüllü')
                    ->boolean()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Kayıt Tarihi')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('is_youth')
                    ->label('Gönüllü Tipi')
                    ->options([
                        '0' => 'Genel Gönüllü',
                        '1' => 'Genç Gönüllü',
                    ]),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVolunteers::route('/'),
            'create' => Pages\CreateVolunteer::route('/create'),
            'view' => Pages\ViewVolunteer::route('/{record}'),
            'edit' => Pages\EditVolunteer::route('/{record}/edit'),
        ];
    }
}
