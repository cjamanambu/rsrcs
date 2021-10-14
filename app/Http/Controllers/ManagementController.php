<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Pdf;

class ManagementController extends Controller
{
	public function pdfs(): array {
		$pdfFiles = Pdf::all()->toArray();
		return array_reverse($pdfFiles);
	}

	public function addPdf(Request $request) {
		$request->validate([
			'title' => 'required',
			'file' => 'required',
		]);
		if ($request->file('file')) {
			$file_name = $request->file('file')->getClientOriginalName();
			$file_path = $request->file('file')->store('public/pdf-files');

			$newPDF = new Pdf([
				'title' => $request->input('title'),
				'file_name' => $file_name,
				'file_path' => $file_path
			]);
			$newPDF->save();
		}
		return response()->json('The pdf file successfully added.');
	}

	public function updatePdf(Request $request) {}
}
