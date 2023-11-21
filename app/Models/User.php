<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\CollectionItem;
use App\Models\TimeTracks;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [ 'name', 'email', 'password' ];

    protected $hidden = [ 'password', 'remember_token' ];

    protected $casts = [ 'email_verified_at' => 'datetime', 'password' => 'hashed' ];

    public function collectionItems() {
        return $this->hasMany(CollectionItem::class);
    }

    public function timeTracks() {
        return $this->hasMany(TimeTracks::class);
    }
}
