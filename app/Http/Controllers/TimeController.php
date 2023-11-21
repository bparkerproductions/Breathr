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

            $timetrack = $user->timeTracks()->firstOrNew([
                'day' => now()->format('Y-m-d')
            ]);

            $timetrack->tracked_minutes = $request->input('minutes');
            $user->timeTracks()->save($timetrack);
        }
    }

    /**
     * Delete ALL time tracks
     */
    public function destroy(Request $request) {
        $user = auth()->user();

        if ($user) {
            TimeTracks::where('user_id', $user->id)->delete();
        }
    }
}
