<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ManagementController;
use App\Http\Controllers\VisitorController;

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

Route::group(['prefix' => 'admin'], function () {
	// pdf routes
	Route::get('pdf', [ManagementController::class, 'get_pdfs']);
	Route::get('pdf/{id}', [ManagementController::class, 'get_pdf']);
	Route::post('pdf/add', [ManagementController::class, 'add_pdf']);
	Route::post('pdf/update', [ManagementController::class, 'update_pdf']);
	Route::post('pdf/delete', [ManagementController::class, 'delete_pdf']);
	// html routes
	Route::get('html', [ManagementController::class, 'get_htmls']);
	Route::get('html/{id}', [ManagementController::class, 'get_html']);
	Route::post('html/add', [ManagementController::class, 'add_html']);
	Route::post('html/update', [ManagementController::class, 'update_html']);
	Route::post('html/delete', [ManagementController::class, 'delete_html']);
	// link routes
	Route::get('link', [ManagementController::class, 'get_links']);
	Route::get('link/{id}', [ManagementController::class, 'get_link']);
	Route::post('link/add', [ManagementController::class, 'add_link']);
	Route::post('link/update', [ManagementController::class, 'update_link']);
	Route::post('link/delete', [ManagementController::class, 'delete_link']);
});

Route::group(['prefix' => 'visitor'], function () {
	// pdf routes
	Route::get('pdf', [VisitorController::class, 'get_pdfs']);
	Route::get('pdf/{id}', [VisitorController::class, 'get_pdf']);
	// html routes
	Route::get('html', [VisitorController::class, 'get_htmls']);
	// link routes
	Route::get('link', [VisitorController::class, 'get_links']);
});