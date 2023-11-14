<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        $user = \App\Models\User::factory()->create([
            'name' => 'Eval User',
            'email' => 'evaluser@test.com',
            'password' => 'evalpassword'
        ]);

        $numberOfTimeTracks = 10;
        $startDate = now();

        for ($i = 0; $i < $numberOfTimeTracks; $i++) {
            \App\Models\TimeTracks::factory()->create([
                'user_id' => $user->id,
                'day' => $startDate->copy()->subDays($i+1)->format('Y-m-d'),
            ]);
        }
    }
}
