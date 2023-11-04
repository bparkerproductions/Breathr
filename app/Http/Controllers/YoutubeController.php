<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class YoutubeController extends Controller
{
    public function search(Request $request) {
        $query = $request->input('q');

        $yt = [
            'base' => 'https://www.googleapis.com/youtube/v3',
            'part' => 'snippet',
            'maxResults' => '9',
            'embeddable' => 'true',
            'type' => 'video',
            'videoDefinition' => 'high',
            'videoDuration' => 'long',
            'key' => env('API_YOUTUBE_KEY')
        ];

        $url = "{$yt['base']}/search?part={$yt['part']}&maxResults={$yt['maxResults']}&videoEmbeddable={$yt['embeddable']}&type={$yt['type']}&videoDefinition={$yt['videoDefinition']}&videoDuration={$yt['videoDuration']}&q={$query}&key={$yt['key']}";

        $response = Http::get($url);

        if ($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json(['error' => 'Unable to fetch data from YouTube'], 500);
        }
    }
}
