<?php

namespace App\Http\Controllers;

use App\Models\CollectionItem;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CollectionController extends Controller
{
    public function store(Request $request) {
        $user = auth()->user();
        $collectionExists = CollectionItem::where('video_id', $request->input('video_id'))->first();

        $collection = new CollectionItem([
            'title' => $request->input('title'),
            'video_id' => $request->input('video_id'),
            'thumbnail_url' => $request->input('thumbnail_url'),
            'durationInMinutes' => $request?->input('durationInMinutes'),
            'description' => $request->input('description')
        ]);

        if ( !$collectionExists ) {
            $user->collectionItems()->save($collection);
        }
    }

    public function destroy(Request $request, $videoId) {
        $collection = CollectionItem::where('video_id', $videoId)->first();

        if ($collection) {
            $collection->delete();
        }
    }
}
