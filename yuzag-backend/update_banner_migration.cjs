const fs = require('fs');
const path = require('path');

const migrationsDir = './database/migrations';
const files = fs.readdirSync(migrationsDir);
const migrationFile = files.find(f => f.includes('create_banners_table.php'));

if (migrationFile) {
    const fullPath = path.join(migrationsDir, migrationFile);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    content = content.replace(
        /\$table->id\(\);/,
        `$table->id();\n            $table->string('title')->nullable();\n            $table->string('image_path');\n            $table->integer('sort_order')->default(0);\n            $table->boolean('is_active')->default(true);`
    );
    
    fs.writeFileSync(fullPath, content);
    console.log('Migration updated successfully.');
} else {
    console.log('Migration file not found.');
}
