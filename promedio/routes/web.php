<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\promediosController;

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

Route::GET('api/averages', [promediosController::class, 'fetchAvg']);
Route::POST('api/newAverage', [promediosController::class, 'avgRegister']);
Route::DELETE('api/deleteAvg/{id}', [promediosController::class, 'avgDelete']);
