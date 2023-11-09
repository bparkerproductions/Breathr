<?php

namespace App\Http\Controllers;

use App\Models\TimeTracks;
use Illuminate\Http\Request;

class TimeController extends Controller
{
    /**
     * Store the amount of minutes logged to a time_track item for the current day. 
     * Create a time_track entry if it doesn't exist.
     */
    public function store(Request $request) {
        $user = auth()->user();
        
        if ($user) {
            $timestamp = time();
            $todaysDate = gmdate('Y-m-d', $timestamp);

            $timetrack = new TimeTracks([
                'day' => $todaysDate,
                'tracked_minutes' => $request->input('minutes')
            ]);

            $user->timeTracks()->save($timetrack);
        } else {
            return response()->json(['message' => 'Not authenticated'], 403);
        }
    }

    public function destroy(Request $request) {
        $user = auth()->user();

        if ($user) {
            TimeTracks::where('user_id', $user->id)->delete();
        }
    }
}
