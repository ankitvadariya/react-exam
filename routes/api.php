<?php

use Illuminate\Http\Request;

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

Route::name('api')->namespace('API')->group(function() {
    Route::get('documents', 'DocumentController@getDocuments');
    Route::get('document/load', "DocumentController@loadDocument");
    
    Route::post('document', "DocumentController@uploadDocument");
});
