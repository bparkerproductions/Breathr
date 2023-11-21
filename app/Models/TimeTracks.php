<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class TimeTracks extends Model
{
    use HasFactory;

    protected $fillable = ['day','tracked_minutes'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
