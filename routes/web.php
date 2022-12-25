<?php

use App\Http\Controllers\Dashboard\ProfileController;
use App\Http\Controllers\Dashboard\TtsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/index');
})->middleware(['auth', 'verified', 'only_admin'])->name('dashboard');
Route::prefix('dashboard')->group(function () {
    Route::middleware('auth')->group(function () {
        // profile router
        Route::get('/profile', [ProfileController::class, 'edit'])->name('dashboard.profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

        // tts router
        Route::get('/tts', [TtsController::class, 'index'])->name('dashboard.tts');
        Route::get('/tts/add', [TtsController::class, 'add'])->name('dashboard.tts.add');
    });
});

require __DIR__.'/auth.php';
