const fs = require('fs');
const path = require('path');

const fullPath = './app/Filament/Resources/SiteSettingResource.php';
let content = fs.readFileSync(fullPath, 'utf8');

content = content.replace(
    /protected static \?string \$navigationIcon = 'heroicon-o-rectangle-stack';/,
    `protected static ?string $navigationIcon = 'heroicon-o-cog';\n    protected static ?string $navigationLabel = 'Site Ayarları';\n    protected static ?string $modelLabel = 'Site Ayarı';\n    protected static ?string $pluralModelLabel = 'Site Ayarları';`
);

content = content.replace(
    /Forms\\Components\\TextInput::make\('key'\)/,
    `Forms\\Components\\TextInput::make('key')->label('Ayar Anahtarı (Key)')`
);

content = content.replace(
    /Forms\\Components\\Textarea::make\('value'\)/,
    `Forms\\Components\\Textarea::make('value')->label('Değer (Metin)')`
);

content = content.replace(
    /Tables\\Columns\\TextColumn::make\('key'\)/,
    `Tables\\Columns\\TextColumn::make('key')->label('Ayar Anahtarı')`
);

// Add the 'value' column to the table to make it visible
content = content.replace(
    /Tables\\Columns\\TextColumn::make\('created_at'\)/,
    `Tables\\Columns\\TextColumn::make('value')->label('Değer')->limit(50),\n                Tables\\Columns\\TextColumn::make('created_at')`
);

fs.writeFileSync(fullPath, content);
console.log('Resource updated successfully.');
