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
	Route::get('pdf', [ManagementController::class, 'pdfs']);
	Route::get('pdf/{id}', [ManagementController::class, 'pdf']);
	Route::post('pdf/add', [ManagementController::class, 'addPdf']);
	Route::post('pdf/update', [ManagementController::class, 'updatePdf']);
	Route::post('pdf/delete', [ManagementController::class, 'deletePdf']);
	// html routes
	Route::get('html', [ManagementController::class, 'htmls']);
	Route::get('html/{id}', [ManagementController::class, 'html']);
	Route::post('html/add', [ManagementController::class, 'addHtml']);
	Route::post('html/update', [ManagementController::class, 'updateHtml']);
	Route::post('html/delete', [ManagementController::class, 'deleteHtml']);
	// link routes
	Route::get('link', [ManagementController::class, 'links']);
	Route::get('link/{id}', [ManagementController::class, 'link']);
	Route::post('link/add', [ManagementController::class, 'addLink']);
	Route::post('link/update', [ManagementController::class, 'updateLink']);
	Route::post('link/delete', [ManagementController::class, 'deleteLink']);
});

Route::group(['prefix' => 'visitor'], function () {
	// pdf routes
	Route::get('pdf', [VisitorController::class, 'pdfs']);
	Route::get('pdf/{id}', [VisitorController::class, 'pdf']);
});