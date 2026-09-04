<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProjectResource\Pages;
use App\Filament\Resources\ProjectResource\RelationManagers;
use App\Models\Project;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProjectResource extends Resource
{
    protected static ?string $model = Project::class;

    protected static ?string $navigationIcon = 'heroicon-o-folder';

    protected static ?string $navigationLabel = 'Projeler';

    protected static ?string $pluralLabel = 'Projeler';

    protected static ?string $modelLabel = 'Proje';

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

                Forms\Components\Section::make('Detay Sekmeleri (HTML Destekli)')
                    ->schema([
                        Forms\Components\RichEditor::make('tabs.asamalar')
                            ->label('Proje Hakkında / Aşamalar')
                            ->required(),
                        Forms\Components\RichEditor::make('tabs.etkinlikler')
                            ->label('Etkinlikler')
                            ->required(),
                        Forms\Components\RichEditor::make('tabs.gorevAlanlar')
                            ->label('Görev Alanlar')
                            ->required(),
                        Forms\Components\RichEditor::make('tabs.iletisim')
                            ->label('İletişim / Sosyal Medya Linkleri')
                            ->required(),
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
            'index' => Pages\ListProjects::route('/'),
            'create' => Pages\CreateProject::route('/create'),
            'view' => Pages\ViewProject::route('/{record}'),
            'edit' => Pages\EditProject::route('/{record}/edit'),
        ];
    }
}
