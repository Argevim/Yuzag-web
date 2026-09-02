const fs = require('fs');
const path = require('path');

const fullPath = './app/Filament/Resources/BannerResource.php';
let content = fs.readFileSync(fullPath, 'utf8');

content = content.replace(
    /protected static \?string \$navigationIcon = 'heroicon-o-rectangle-stack';/,
    `protected static ?string $navigationIcon = 'heroicon-o-photo';\n    protected static ?string $navigationLabel = 'Slider Bannerlar';\n    protected static ?string $modelLabel = 'Banner';\n    protected static ?string $pluralModelLabel = 'Bannerlar';\n    protected static ?int $navigationSort = 1;`
);

content = content.replace(
    /Forms\\Components\\TextInput::make\('title'\)\n                    ->maxLength\(255\)/,
    `Forms\\Components\\TextInput::make('title')->label('Başlık Metni')->maxLength(255)`
);

content = content.replace(
    /Forms\\Components\\TextInput::make\('image_path'\)\n                    ->required\(\)\n                    ->maxLength\(255\)/,
    `Forms\\Components\\FileUpload::make('image_path')->label('Görsel Yükle')->image()->directory('banners')->required()`
);

content = content.replace(
    /Forms\\Components\\TextInput::make\('sort_order'\)\n                    ->required\(\)\n                    ->numeric\(\)\n                    ->default\(0\)/,
    `Forms\\Components\\TextInput::make('sort_order')->label('Sıralama')->required()->numeric()->default(0)`
);

content = content.replace(
    /Forms\\Components\\Toggle::make\('is_active'\)\n                    ->required\(\)/,
    `Forms\\Components\\Toggle::make('is_active')->label('Aktif Mi?')->default(true)`
);

content = content.replace(
    /Tables\\Columns\\TextColumn::make\('title'\)/,
    `Tables\\Columns\\ImageColumn::make('image_path')->label('Görsel'),\n                Tables\\Columns\\TextColumn::make('title')->label('Başlık')`
);

content = content.replace(
    /Tables\\Columns\\TextColumn::make\('image_path'\)\n                    ->searchable\(\),/,
    ``
);

content = content.replace(
    /Tables\\Columns\\TextColumn::make\('sort_order'\)/,
    `Tables\\Columns\\TextColumn::make('sort_order')->label('Sıra')`
);

content = content.replace(
    /Tables\\Columns\\IconColumn::make\('is_active'\)/,
    `Tables\\Columns\\IconColumn::make('is_active')->label('Durum')`
);

fs.writeFileSync(fullPath, content);
console.log('BannerResource updated successfully.');
