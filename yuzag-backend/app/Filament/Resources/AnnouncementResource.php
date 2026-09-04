<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AnnouncementResource\Pages;
use App\Filament\Resources\AnnouncementResource\RelationManagers;
use App\Models\Announcement;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AnnouncementResource extends Resource
{
    protected static ?string $model = Announcement::class;

    protected static ?string $navigationIcon = 'heroicon-o-megaphone';

    protected static ?string $navigationLabel = 'Duyurular';

    protected static ?string $pluralLabel = 'Duyurular';

    protected static ?string $modelLabel = 'Duyuru';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Genel Bilgiler')
                    ->columns(2)
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('Başlık')
                            ->required(),
                        Forms\Components\Select::make('status')
                            ->label('Durum')
                            ->options([
                                'Yeni' => 'Yeni',
                                'Yakında' => 'Yakında',
                                'Devam Ediyor' => 'Devam Ediyor',
                                'Tamamlandı' => 'Tamamlandı',
                            ])
                            ->required(),
                        Forms\Components\TextInput::make('date')
                            ->label('Tarih/Yıl')
                            ->required(),
                        Forms\Components\TextInput::make('location')
                            ->label('Konum')
                            ->required(),
                        Forms\Components\TextInput::make('image')
                            ->label('Resim URL')
                            ->columnSpanFull(),
                        Forms\Components\Textarea::make('short_desc')
                            ->label('Kısa Açıklama')
                            ->required()
                            ->columnSpanFull(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Sıra')
                    ->sortable(),
                Tables\Columns\TextColumn::make('title')
                    ->label('Başlık')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->label('Durum')
                    ->sortable(),
                Tables\Columns\TextColumn::make('date')
                    ->label('Tarih'),
                Tables\Columns\TextColumn::make('location')
                    ->label('Konum'),
            ])
            ->reorderable('sort_order')
            ->defaultSort('sort_order', 'asc')
            ->filters([
                //
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
            'index' => Pages\ListAnnouncements::route('/'),
            'create' => Pages\CreateAnnouncement::route('/create'),
            'view' => Pages\ViewAnnouncement::route('/{record}'),
            'edit' => Pages\EditAnnouncement::route('/{record}/edit'),
        ];
    }
}
