<?php

use App\Http\Controllers\Api\Category\IndexController;
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

//Route::group(['namespace' => 'App\Http\Controllers\Api'], function(){
//    Route::group(['prefix' => 'categories', 'namespace' => 'Category'], function(){
//        Route::get('/', IndexController::class);
//    });
//});

Route::group(['prefix' => 'categories'], function(){
    Route::get('/', IndexController::class);
});

