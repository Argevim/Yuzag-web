<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('volunteers', function (Blueprint $table) {
            $table->id();
            $table->string('tc', 11);
            $table->string('ad_soyad');
            $table->date('dogum_tarihi');
            $table->boolean('aktif_ogrenci');
            $table->string('okul');
            $table->string('ogrenim_durumu');
            $table->string('dil_1')->nullable();
            $table->string('dil_seviye_1')->nullable();
            $table->string('dil_2')->nullable();
            $table->string('dil_seviye_2')->nullable();
            $table->string('tel');
            $table->string('email');
            $table->string('il');
            $table->string('ref_ad_1');
            $table->string('ref_tel_1');
            $table->string('ref_ad_2')->nullable();
            $table->string('ref_tel_2')->nullable();
            $table->json('faaliyetler');
            $table->text('motivasyon');
            $table->boolean('is_youth')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('volunteers');
    }
};
