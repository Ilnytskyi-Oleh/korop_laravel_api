<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['namespace' => 'App\Http\Controllers\Api'], function(){
    Route::group(['prefix' => 'categories', 'namespace' => 'Category'], function(){
        Route::get('/', IndexController::class);
        Route::post('/', StoreController::class);
        Route::put('/{category}', UpdateController::class);
        Route::delete('/{category}', DeleteController::class);
    });

    Route::group(['prefix' => 'products', 'namespace' => 'Product'], function(){
        Route::get('/', IndexController::class);
        Route::get('/{product}', ShowController::class);
    });
});




