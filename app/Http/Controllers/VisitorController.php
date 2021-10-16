<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Pdf;
use Illuminate\Support\Facades\Storage;

class VisitorController extends Controller
{
	public function pdfs() {
		$pdfs = Pdf::all()->toArray();
		return array_reverse($pdfs);
	}

	public function pdf($id) {
		$pdf = Pdf::findOrFail($id);
		if (!Storage::exists($pdf->file_path)) {
			return response()->json('File does not exist', 404);
		}
		$headers = ['Content-Type' => 'application/pdf'];
		return Storage::download($pdf->file_path, $pdf->file_name, $headers);
	}
}
