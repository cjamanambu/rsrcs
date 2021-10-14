<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Pdf;
use App\Models\Html;
use Illuminate\Support\Facades\Storage;

class ManagementController extends Controller
{
	public function pdfs() {
		$pdfs = Pdf::all()->toArray();
		return array_reverse($pdfs);
	}

	public function pdf($id) {
		$pdf = Pdf::findOrFail($id);
		return response()->json($pdf);
	}

	public function addPdf(Request $request) {
		$request->validate([
			'title' => 'required',
			'file' => 'required|mimes:pdf',
		]);
		if ($request->file('file')) {
			$file_name = $request->file('file')->getClientOriginalName();
			$file_path = $request->file('file')->store('public/pdf-files');
			$new_pdf = new Pdf([
				'title' => $request->input('title'),
				'file_name' => $file_name,
				'file_path' => $file_path
			]);
			$new_pdf->save();
		}
		return response()->json('The pdf file was successfully added.');
	}

	public function updatePdf(Request $request) {
		$request->validate([
			'id' => 'required',
			'title' => 'required',
			'file' => 'required|mimes:pdf',
		]);
		$pdf = Pdf::findOrFail($request->input('id'));
		if (Storage::exists($pdf->file_path)) {
			Storage::delete($pdf->file_path);
		}
		if ($request->file('file')) {
			$file_name = $request->file('file')->getClientOriginalName();
			$file_path = $request->file('file')->store('public/pdf-files');
			$pdf->title = $request->input('title');
			$pdf->file_name = $file_name;
			$pdf->file_path = $file_path;
			$pdf->save();
		}
		return response()->json('The pdf file was successfully updated.');
	}

	public function deletePdf(Request $request) {
		$request->validate([
			'id' => 'required',
		]);
		$pdf = Pdf::findOrFail($request->input('id'));
		if (Storage::exists($pdf->file_path)) {
			Storage::delete($pdf->file_path);
		}
		$pdf->delete();
		return response()->json('The pdf file was successfully deleted.');
	}

	public function htmls() {
		$htmls = Html::all()->toArray();
		return array_reverse($htmls);
	}

	public function html($id) {
		$html = Html::findOrFail($id);
		return response()->json($html);
	}

	public function addHtml(Request $request) {
		$request->validate([
			'title' => 'required',
			'snippet' => 'required',
		]);
		$new_html = new Html([
			'title' => $request->input('title'),
			'description' => $request->input('description'),
			'snippet' => $request->input('snippet')
		]);
		$new_html->save();
		return response()->json('The html snippet was successfully added.');
	}

	public function updateHtml(Request $request) {
		$request->validate([
			'id' => 'required',
			'title' => 'required',
			'snippet' => 'required',
		]);
		$html = Html::findOrFail($request->input('id'));
		$html->title = $request->input('title');
		$html->description = $request->input('description');
		$html->snippet = $request->input('snippet');
		$html->save();
		return response()->json('The html snippet was successfully updated');
	}

	public function deleteHtml(Request $request) {
		$request->validate([
			'id' => 'required'
		]);
		$html = Html::findOrFail($request->input('id'));
		$html->delete();
		return response()->json('The html snippet was successfully deleted.');
	}
}
