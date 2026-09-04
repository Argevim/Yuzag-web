<?php

use App\Models\Project;
use App\Models\Announcement;
use App\Http\Controllers\Api\FormController;

Route::post('/volunteers', [FormController::class, 'submitVolunteer']);
Route::post('/contact-messages', [FormController::class, 'submitContactMessage']);

Route::get('/projects', function () {
    return response()->json(Project::orderBy('sort_order', 'asc')->get());
});

Route::get('/announcements', function () {
    return response()->json(Announcement::orderBy('sort_order', 'asc')->get());
});

Route::get('/settings/{key}', function ($key) {
    $setting = \App\Models\SiteSetting::where('key', $key)->first();
    if ($setting) {
        return response()->json(['key' => $key, 'value' => $setting->value]);
    }
    return response()->json(['message' => 'Setting not found'], 404);
});

Route::get('/banners', function () {
    $banners = \App\Models\Banner::where('is_active', true)->orderBy('sort_order', 'asc')->get();
    
    // Append full URL to image paths
    $banners->transform(function ($banner) {
        $banner->image_url = asset('storage/' . $banner->image_path);
        return $banner;
    });
    
    return response()->json($banners);
});
