<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('/', '\App\Http\Controllers\HomeController');

Route::get('/', function () {
    if (auth()->user()) {
        return redirect('/cv');
    } else {
        return redirect('/login');
    }
});

Route::get('/cv/{any?}', function () {
    return view('app');
})->where('any', '.*')->middleware('auth');

Auth::routes(['register' => false]);
