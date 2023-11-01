<?php

use Illuminate\Support\Facades\Route;

Route::get('/admin{any}', function () {
    return view('Adminapp');
})->where('any', '.*');

Route::get('/site{any}', function () {
    return view('Siteapp');
})->where('any', '.*');
