<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use App\Models\Pdf;
use App\Models\Html;
use App\Models\Link;

class ManagementController extends Controller
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
		return response()->json($pdf);
	}

	public function add_pdf(Request $request) {
		try {
			$request->validate([
				'title' => 'required',
				'file' => 'required|mimes:pdf',
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
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
		return response()->json('The pdf file was successfully added.', 201);
	}

	public function update_pdf(Request $request) {
		try {
			$request->validate([
				'id' => 'required',
				'title' => 'required',
				'file' => 'required|mimes:pdf',
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$pdf = Pdf::find($request->input('id'));
		if(!$pdf) {
			return response()->json('PDF not found', 404);
		}
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

	public function delete_pdf(Request $request) {
		try {
			$request->validate([
				'id' => 'required',
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$pdf = Pdf::find($request->input('id'));
		if(!$pdf) {
			return response()->json('PDF not found', 404);
		}
		if (Storage::exists($pdf->file_path)) {
			Storage::delete($pdf->file_path);
		}
		$pdf->delete();
		return response()->json('The pdf file was successfully deleted.');
	}

	public function get_htmls() {
		$htmls = Html::all()->toArray();
		$htmls = array_reverse($htmls);
		return response()->json($htmls);
	}

	public function get_html($id) {
		$html = Html::find($id);
		if(!$html) {
			return response()->json('HTML not found', 404);
		}
		return response()->json($html);
	}

	public function add_html(Request $request) {
		try {
			$request->validate([
				'title' => 'required',
				'snippet' => 'required',
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$new_html = new Html([
			'title' => $request->input('title'),
			'description' => $request->input('description'),
			'snippet' => $request->input('snippet')
		]);
		$new_html->save();
		return response()->json('The html snippet was successfully added.', 201);
	}

	public function update_html(Request $request) {
		try {
			$request->validate([
				'id' => 'required',
				'title' => 'required',
				'snippet' => 'required',
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$html = Html::find($request->input('id'));
		if(!$html) {
			return response()->json('HTML not found', 404);
		}
		$html->title = $request->input('title');
		$html->description = $request->input('description');
		$html->snippet = $request->input('snippet');
		$html->save();
		return response()->json('The html snippet was successfully updated');
	}

	public function delete_html(Request $request) {
		try {
			$request->validate([
				'id' => 'required'
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$html = Html::find($request->input('id'));
		if(!$html) {
			return response()->json('HTML not found', 404);
		}
		$html->delete();
		return response()->json('The html snippet was successfully deleted.');
	}

	public function get_links() {
		$links = Link::all()->toArray();
		$links = array_reverse($links);
		return response()->json($links);
	}

	public function get_link($id) {
		$link = Link::find($id);
		if(!$link) {
			return response()->json('Link not found', 404);
		}
		return response()->json($link);
	}

	public function add_link(Request $request) {
		try {
			$request->validate([
				'title' => 'required',
				'link' => 'required',
				'new_tab' => 'required',
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$new_link = new Link([
			'title' => $request->input('title'),
			'link' => $request->input('link'),
			'new_tab' => $request->input('new_tab')
		]);
		$new_link->save();
		return response()->json('The link was successfully added.', 201);
	}

	public function update_link(Request $request) {
		try {
			$request->validate([
				'id' => 'required',
				'title' => 'required',
				'link' => 'required',
				'new_tab' => 'required',
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$link = Link::find($request->input('id'));
		if(!$link) {
			return response()->json('Link not found', 404);
		}
		$link->title = $request->input('title');
		$link->link = $request->input('link');
		$link->new_tab = $request->input('new_tab');
		$link->save();
		return response()->json('The link was successfully updated');
	}

	public function delete_link(Request $request) {
		try {
			$request->validate([
				'id' => 'required'
			]);
		} catch (\Exception $e) {
			return response()->json($e->getMessage(), 403);
		}
		$link = Link::find($request->input('id'));
		if(!$link) {
			return response()->json('Link not found', 404);
		}
		$link->delete();
		return response()->json('The link was successfully deleted.');
	}
}
