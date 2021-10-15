<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Pdf;

class VisitorController extends Controller
{
	public function pdfs() {
		$pdfs = Pdf::all()->toArray();
		return array_reverse($pdfs);
	}
}
