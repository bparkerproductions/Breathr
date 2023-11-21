<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TimeTrackTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test that the main app can load
     */
    public function test_main_app_screen_can_be_rendered(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * The <Dashboard> app screen can be rendered as a user
     */
    public function test_dashboard_app_screen_can_be_rendered(): void
    {
        $user = User::factory()->create();

        $response = $this
            ->actingAs($user)
            ->get('/dashboard');

        $response->assertStatus(200);
    }

    /**
     * A time track entry can be made for today's date.
     */
    public function test_time_track_entry_can_be_created_for_today(): void
    {
        $user = User::factory()->create();
        $minutes = 20;

        $response = $this
            ->actingAs($user)
            ->post(route('time.store'), [
                'minutes' => $minutes
            ]);

        $this->assertDatabaseHas('time_tracks', [
            'user_id' => $user->id,
            'day' => now()->format('Y-m-d'),
            'tracked_minutes' => $minutes
        ]);

        $response->assertStatus(200);
    }

    /**
     * All time track entries are deleted successfully
     */
    public function test_all_time_track_entries_can_be_deleted(): void
    {
        $user = User::factory()->create();

        $numberOfTimeTracks = 5;
        $startDate = now();

        // Create 5 time track entries
        for ($i = 0; $i < $numberOfTimeTracks; $i++) {
            \App\Models\TimeTracks::factory()->create([
                'user_id' => $user->id,
                'day' => $startDate->copy()->subDays($i+1)->format('Y-m-d'),
            ]);
        }

        // Test that they can be deleted
        $response = $this
            ->actingAs($user)
            ->delete(route('time.deleteAll'));

        // Confirm that time_tracks with user is empty
        $this->assertDatabaseMissing('time_tracks', [
            'user_id' => $user->id
        ]);

        $response->assertStatus(200);
    }
}
