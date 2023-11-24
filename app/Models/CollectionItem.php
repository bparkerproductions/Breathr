<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CollectionItem extends Model
{
    use HasFactory;

    protected $fillable = [ 'title', 'video_id', 'thumbnail_url', 'durationInMinutes', 'description' ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}