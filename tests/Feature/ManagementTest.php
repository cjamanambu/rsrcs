<?php

namespace Tests\Feature;

use App\Models\Html;
use App\Models\Link;
use App\Models\Pdf;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\UploadedFile;
use Tests\TestCase;

class ManagementTest extends TestCase
{
	use RefreshDatabase, WithFaker;

	public function test_admin_get_pdfs_route() {
	  $this->withoutExceptionHandling();
	  Pdf::factory()->times(2)->create();
	  $response = $this->get('/api/admin/pdf');
	  $response->assertJsonCount(2);
	}

	public function test_admin_get_pdf_route() {
		$this->withoutExceptionHandling();
		Pdf::factory()->times(5)->create();
		$id = random_int(1, 5);
		$response = $this->get('/api/admin/pdf/'.$id);
		$response->assertStatus(200);
		$response = $this->get('/api/admin/pdf/6');
		$response->assertStatus(404);
	}

	public function test_admin_add_pdf_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/pdf/add', [
			'title' => 'Not pdf',
			'file' =>  UploadedFile::fake()->create('test.html', 100)
		]);
		$response->assertStatus(403);
		$this->assertEmpty(Pdf::all());
	}

	public function test_admin_add_pdf_route() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/pdf/add', [
			'title' => 'test pdf',
			'file' => UploadedFile::fake()->create('test.pdf', 100)
		]);
		$response->assertStatus(201);
		$this->assertDatabaseHas('pdfs', ['id' => 1]);
		$this->assertTrue(count(Pdf::all()) == 1);
	}

	public function test_admin_update_pdf_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/pdf/update', [
			'id' => '',
			'title' => '',
			'file' => ''
		]);
		$response->assertStatus(403);
	}

	public function test_admin_update_pdf_route() {
		$this->withoutExceptionHandling();
		Pdf::factory()->times(1)->create();
		$response = $this->post('/api/admin/pdf/update', [
			'id' => 1,
			'title' => 'test update',
			'file' => UploadedFile::fake()->create('test.pdf', 100)
		]);
		$response->assertStatus(200);
		$this->assertTrue(Pdf::find(1)->title == 'test update');
	}

	public function test_admin_delete_pdf_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/pdf/delete', [
			'id' => '',
		]);
		$response->assertStatus(403);
	}

	public function test_admin_delete_pdf_route() {
		$this->withoutExceptionHandling();
		Pdf::factory()->times(5)->create();
		$id = random_int(1, 5);
		$response = $this->post('/api/admin/pdf/delete', [
			'id' => $id,
		]);
		$this->assertDatabaseMissing('pdfs', ['id' => $id]);
		$response->assertStatus(200);
	}

	public function test_admin_get_htmls_route() {
		$this->withoutExceptionHandling();
		Html::factory()->times(2)->create();
		$response = $this->get('/api/admin/html');
		$response->assertJsonCount(2);
	}

	public function test_admin_get_html_route() {
		$this->withoutExceptionHandling();
		Html::factory()->times(5)->create();
		$id = random_int(1, 5);
		$response = $this->get('/api/admin/html/'.$id);
		$response->assertStatus(200);
		$response = $this->get('/api/admin/html/6');
		$response->assertStatus(404);
	}

	public function test_admin_add_html_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/html/add', [
			'title' => '',
			'snippet' =>  ''
		]);
		$response->assertStatus(403);
		$this->assertEmpty(Html::all());
	}

	public function test_admin_add_html_route() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/html/add', [
			'title' => 'test',
			'description' => 'test',
			'snippet' =>  'test'
		]);
		$response->assertStatus(201);
		$this->assertTrue(count(Html::all()) == 1);
		$this->assertDatabaseHas('htmls', ['id' => 1]);
	}

	public function test_admin_update_html_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/html/update', [
			'id' => '',
			'title' => '',
			'snippet' => ''
		]);
		$response->assertStatus(403);
	}

	public function test_admin_update_html_route() {
		$this->withoutExceptionHandling();
		Html::factory()->times(1)->create();
		$response = $this->post('/api/admin/html/update', [
			'id' => 1,
			'title' => 'test update',
			'description' => 'test update',
			'snippet' =>  'test update'
		]);
		$response->assertStatus(200);
		$this->assertTrue(Html::find(1)->title == 'test update');
	}

	public function test_admin_delete_html_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/html/delete', [
			'id' => '',
		]);
		$response->assertStatus(403);
	}

	public function test_admin_delete_html_route() {
		$this->withoutExceptionHandling();
		Html::factory()->times(5)->create();
		$id = random_int(1, 5);
		$response = $this->post('/api/admin/html/delete', [
			'id' => $id,
		]);
		$response->assertStatus(200);
		$this->assertDatabaseMissing('htmls', ['id' => $id]);
	}

	public function test_admin_get_links_route() {
		$this->withoutExceptionHandling();
		Link::factory()->times(2)->create();
		$response = $this->get('/api/admin/link');
		$response->assertJsonCount(2);
	}

	public function test_admin_get_link_route() {
		$this->withoutExceptionHandling();
		Link::factory()->times(5)->create();
		$id = random_int(1, 5);
		$response = $this->get('/api/admin/link/'.$id);
		$response->assertStatus(200);
		$response = $this->get('/api/admin/link/6');
		$response->assertStatus(404);
	}

	public function test_admin_add_link_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/link/add', [
			'title' => '',
			'link' =>  '',
			'new_tab' =>  ''
		]);
		$response->assertStatus(403);
		$this->assertEmpty(Link::all());
	}

	public function test_admin_add_link_route() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/link/add', [
			'title' => 'test',
			'link' => 'https://test.com',
			'new_tab' =>  random_int(0, 1)
		]);
		$response->assertStatus(201);
		$this->assertTrue(count(Link::all()) == 1);
		$this->assertDatabaseHas('links', ['id' => 1]);
	}

	public function test_admin_update_link_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/link/update', [
			'id' => '',
			'title' => '',
			'link' => '',
			'new_tab' =>  ''
		]);
		$response->assertStatus(403);
	}

	public function test_admin_update_link_route() {
		$this->withoutExceptionHandling();
		Link::factory()->times(1)->create();
		$response = $this->post('/api/admin/link/update', [
			'id' => 1,
			'title' => 'test update',
			'link' => 'https://testupdate.com',
			'new_tab' =>  random_int(0, 1)
		]);
		$response->assertStatus(200);
		$this->assertTrue(Link::find(1)->title == 'test update');
	}

	public function test_admin_delete_link_route_validation() {
		$this->withoutExceptionHandling();
		$response = $this->post('/api/admin/link/delete', [
			'id' => '',
		]);
		$response->assertStatus(403);
	}

	public function test_admin_delete_link_route() {
		$this->withoutExceptionHandling();
		Link::factory()->times(5)->create();
		$id = random_int(1, 5);
		$response = $this->post('/api/admin/link/delete', [
			'id' => $id,
		]);
		$response->assertStatus(200);
		$this->assertDatabaseMissing('links', ['id' => $id]);
	}
}
