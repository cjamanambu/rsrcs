<?php

namespace Tests\Feature;

use App\Models\Html;
use App\Models\Link;
use App\Models\Pdf;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class VisitorTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	public function test_visitor_get_pdfs_route() {
		$this->withoutExceptionHandling();
		Pdf::factory()->times(2)->create();
		$response = $this->get('/api/visitor/pdf');
		$response->assertJsonCount(2);
	}

	public function test_visitor_get_pdf_route() {
		$this->withoutExceptionHandling();
		$this->post('/api/admin/pdf/add', [
			'title' => 'Test PDF',
			'file' =>  UploadedFile::fake()->create('test.pdf', 100)
		]);
		$response = $this->get('/api/visitor/pdf/1');
		$response->assertStatus(200);
		$response = $this->get('/api/visitor/pdf/2');
		$response->assertStatus(404);
	}

	public function test_visitor_get_htmls_route() {
		$this->withoutExceptionHandling();
		Html::factory()->times(2)->create();
		$response = $this->get('/api/visitor/html');
		$response->assertJsonCount(2);
	}

	public function test_visitor_get_links_route() {
		$this->withoutExceptionHandling();
		Link::factory()->times(2)->create();
		$response = $this->get('/api/visitor/link');
		$response->assertJsonCount(2);
	}
}
