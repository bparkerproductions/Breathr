<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CollectionItem>
 */
class CollectionItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'video_id' => 'Ftm2uv7-Ybw',
            'thumbnail_url' => $this->faker->imageUrl(640, 480, 'animals', true),
            'title' => $this->faker->sentence,
            'description' => $this->faker->paragraph
        ];
    }
}
