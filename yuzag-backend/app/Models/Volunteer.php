<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Volunteer extends Model
{
    protected $guarded = [];

    protected $casts = [
        'faaliyetler' => 'array',
        'aktif_ogrenci' => 'boolean',
        'is_youth' => 'boolean',
        'dogum_tarihi' => 'date',
    ];
}
