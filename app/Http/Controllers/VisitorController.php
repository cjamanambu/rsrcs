<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;

use App\Models\Pdf;
use App\Models\Html;
use App\Models\Link;

class VisitorController extends Controller
{
	public function get_pdfs() {
		$pdfs = Pdf::all()->toArray();
		$pdfs = array_reverse($pdfs);
		return response()->json($pdfs);
	}

	public function get_pdf($id) {
		$pdf = Pdf::find($id);
		if(!$pdf) {
			return response()->json('PDF not found', 404);
		}
		if (!Storage::exists($pdf->file_path)) {
			return response()->json('File does not exist', 404);
		}
		$headers = ['Content-Type' => 'application/pdf'];
		return Storage::download($pdf->file_path, $pdf->file_name, $headers);
	}

	public function get_htmls() {
		$htmls = Html::all()->toArray();
		$htmls = array_reverse($htmls);
		return response()->json($htmls);
	}

	public function get_links() {
		$links = Link::all()->toArray();
		$links = array_reverse($links);
		return response()->json($links);
	}
}
