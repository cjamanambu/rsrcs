<?php

namespace Database\Factories;

use App\Models\Html;
use Illuminate\Database\Eloquent\Factories\Factory;

class HtmlFactory extends Factory
{
	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var string
	 */
	protected $model = Html::class;

	/**
	 * Define the model's default state.
	 *
	 * @return array
	 */
	public function definition()
	{
		return [
			'title' => $this->faker->text(),
			'description' => $this->faker->text(),
			'snippet' => $this->faker->text()
		];
	}
}
