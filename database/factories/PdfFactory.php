<?php

namespace Database\Factories;

use App\Models\Pdf;
use Illuminate\Database\Eloquent\Factories\Factory;

class PdfFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Pdf::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'title' => $this->faker->text(),
			'file_name' => $this->faker->text(),
			'file_path' => $this->faker->filePath(),
		];
	}
}
