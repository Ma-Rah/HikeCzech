<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', 'IndexController@index');

// display the view auth/react when user navigates to /login with GET
Route::view('/login', 'auth/react')->name('login');

// display the view auth/react when user navigates to /register with GET
Route::view('/register', 'auth/react')->name('register');



Route::get('/entity/{entity_id}', 'EntityController@show');
Route::get('/entity/create', 'EntityController@create');
// Route::get('/entity/details', 'EntityController@details');
// Route::get('/entity/map', 'EntityController@map');

// Registration form

// Route::get('/register', "RegisteredUserController@create");
Route::post('/register', "RegisteredUserController@store");





