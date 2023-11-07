<?php

namespace App\Http\Controllers;

use App\Models\CollectionItem;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function store(Request $request) {
        $user = auth()->user();

        $collection = new CollectionItem([
            'title' => $request->input('title'),
            'video_id' => $request->input('video_id'),
            'thumbnail_url' => $request->input('thumbnail_url'),
            'durationInMinutes' => $request?->input('durationInMinutes'),
            'description' => $request->input('description')
        ]);

        $user->collectionItems()->save($collection);
    }
}
