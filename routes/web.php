<?php

use App\Http\Controllers\CollectionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ThesaurusController;
use App\Http\Controllers\YoutubeController;
use App\Models\User;
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
    return Inertia::render('Main', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'user' => auth()->user() ? auth()->user()->load('collectionItems') : null
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'user' => auth()->user() ? auth()->user()->load('collectionItems') : null
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/youtube/search', [YoutubeController::class, 'search']);
Route::get('/youtube/searchURL', [YoutubeController::class, 'searchURL']);
Route::get('/thesaurus/suggestions', [ThesaurusController::class, 'getSuggestions']);

Route::post('/collection/store', [CollectionController::class, 'store']);
Route::delete('/collection/{videoId}', [CollectionController::class, 'destroy']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
