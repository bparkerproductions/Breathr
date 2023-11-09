<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TimeController extends Controller
{
    /**
     * Store the amount of minutes logged to a time_track item for the current day. 
     * Create a time_track entry if it doesn't exist.
     */
    public function store() {
        ddd('store time track');
    }
}
