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

    public function search(Request $request) {
        $searchTerm = $request->input('search');

        $collectionItems = CollectionItem::where('title', 'LIKE', "%{$searchTerm}%")
        ->orWhere('description', 'LIKE', "%{$searchTerm}%")
        ->get();

        return response()->json($collectionItems);
    }

    public function editTitle(Request $request, $id) {
        $request->validate([
            'title' => 'required|max:255'
        ]);
        
        CollectionItem::where('id', $id)->update([
            'title'=> $request->input('title')
        ]);
    }
}
