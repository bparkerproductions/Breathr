<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\CollectionItem;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CollectionItemTest extends TestCase
{
    use RefreshDatabase;

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

    /**
     * Test that a collection item can be created and stored in the database
     */
    public function test_collection_item_can_be_created(): void
    {
        $user = User::factory()->create();
        $videoId = 'Ftm2uv7-Ybw';
        $videoTitle = 'Relaxing Rain Sounds 8 hour audio';

        $response = $this
            ->actingAs($user)
            ->post('/collection/store', [
                'title' => $videoTitle,
                'video_id' => $videoId,
                'thumbnail_url' => 'https://i.ytimg.com/vi/Ftm2uv7-Ybw/mqdefault.jpg',
                'description' => 'These relaxing rain sounds will put you to sleep instantly.'
            ]);

        $response->assertSessionHasNoErrors();

        $this->assertDatabaseHas('collection_items', [
            'user_id' => $user->id,
            'video_id' => $videoId,
            'title' => $videoTitle
        ]);

        $response->assertStatus(200);
    }

    /**
     * Test that an existing collection item's title can be edited
     */
    public function test_collection_item_title_can_be_edited(): void
    {
        $user = User::factory()->create();
        $collectionItem = CollectionItem::factory()->create([
            'user_id' => $user->id,
            'title' => 'Old Title'
        ]);
        $newTitle = 'Relaxing New Title'; // The value to test with

        $response = $this
            ->actingAs($user)
            ->put(route('collection.editTitle', $collectionItem->id), [
                'title' => $newTitle
            ]);

        $this->assertDatabaseHas('collection_items', [
            'user_id' => $user->id,
            'id' => $collectionItem->id,
            'title' => $newTitle
        ]);

        $response->assertStatus(200);
    }

    /**
     * Test that an existing collection item can be deleted
     */
    public function test_collection_item_can_be_deleted(): void
    {
        $user = User::factory()->create();
        $collectionItem = CollectionItem::factory()->create([
            'user_id' => $user->id
        ]);

        $response = $this
            ->actingAs($user)
            ->delete(route('collection.deleteItem', $collectionItem->video_id));

        $this->assertDatabaseMissing('collection_items', [
            'user_id' => $user->id,
            'video_id' => $collectionItem->video_id
        ]);

        $response->assertStatus(200);
    }
}
