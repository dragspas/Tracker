<?php

Route::group([

   'prefix' => ''

], function () {

    Route::get('/{path?}', function($path = null){
        return View::make('app');
    })->where('path', '.*'); 

    Route::post('login', 'AuthController@login');
    Route::get('reg', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refreshToken', 'AuthController@refresh');
    Route::post('authenticatedUser', 'AuthController@authenticatedUser');

    Route::post('users', 'Front\Register\RegisterController@postCreate');



});