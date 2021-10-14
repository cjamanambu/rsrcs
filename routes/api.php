<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ManagementController;

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
	Route::get('pdf', [ManagementController::class, 'pdfs'])->name('admin_pdfs');
	Route::get('pdf/{id}', [ManagementController::class, 'pdf'])->name('admin_pdf');
	Route::post('pdf/add', [ManagementController::class, 'addPdf'])->name('admin_add_pdf');
	Route::post('pdf/update', [ManagementController::class, 'updatePdf'])->name('admin_update_pdf');
	Route::post('pdf/delete', [ManagementController::class, 'deletePdf'])->name('admin_delete_pdf');
});