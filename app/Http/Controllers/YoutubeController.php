<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class YoutubeController extends Controller
{
    protected $yt;

    public function __construct() {
        $this->yt = [
            'base' => 'https://www.googleapis.com/youtube/v3',
            'part' => 'snippet',
            'maxResults' => '9',
            'embeddable' => 'true',
            'type' => 'video',
            'videoDefinition' => 'high',
            'videoDuration' => 'long',
            'key' => env('API_YOUTUBE_KEY')
        ];
    }

    public function search(Request $request) {
        $query = $request->input('q');

        $url = "{$this->yt['base']}/search?part={$this->yt['part']}&maxResults={$this->yt['maxResults']}&videoEmbeddable={$this->yt['embeddable']}&type={$this->yt['type']}&videoDefinition={$this->yt['videoDefinition']}&videoDuration={$this->yt['videoDuration']}&q={$query}&key={$this->yt['key']}";

        $response = Http::get($url);

        if ($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json(['error' => 'Unable to fetch data from YouTube'], 500);
        }
    }

    public function searchURL(Request $request) {
        $id = $request->input('id');

        $url = "{$this->yt['base']}/videos?id={$id}&part={$this->yt['part']}&key={$this->yt['key']}";

        $response = Http::get($url);

        if ($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json(['error' => 'Unable to fetch data from YouTube'], 500);
        }
    }
}
