<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TimeTrack>
 */
class TimeTracksFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = \App\Models\TimeTracks::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'day' => $this->faker->date('Y-m-d'),
            'tracked_minutes' => $this->faker->numberBetween(3, 30)
        ];
    }
}
