<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ThesaurusController extends Controller
{
    public function getSuggestions(Request $request) {
        $term = $request->input("term");

        $key = env("API_THESAURUS_KEY");
        $baseURL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json';
        $url = "{$baseURL}/{$term}?key={$key}";

        $response = Http::get($url);

        if ($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json(['error' => 'Unable to grab thesaurus suggestions'], 500);
        }
        
    }
}
