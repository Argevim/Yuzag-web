const fs = require('fs');
const path = require('path');

const migrationsDir = './database/migrations';
const files = fs.readdirSync(migrationsDir);
const migrationFile = files.find(f => f.includes('create_site_settings_table.php'));

if (migrationFile) {
    const fullPath = path.join(migrationsDir, migrationFile);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    content = content.replace(
        /\$table->id\(\);/,
        `$table->id();\n            $table->string('key')->unique();\n            $table->text('value')->nullable();`
    );
    
    fs.writeFileSync(fullPath, content);
    console.log('Migration updated successfully.');
} else {
    console.log('Migration file not found.');
}
