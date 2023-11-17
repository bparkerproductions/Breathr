<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CollectionItemTest extends TestCase
{
    /**
     * The <Main> app screen can be rendered
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
}
