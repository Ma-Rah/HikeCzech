<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\City;
use App\Models\Point;
use App\Models\Trail;

class Entity extends Model
{
    use HasFactory;

	public function city() 
	{
		$this->belongsTo(City::class);
	}

	public function points() 
	{
		$this->hasMany(Point::class);
	}

	public function trails() 
	{
		$this->hasMany(Trail::class);
	}
}

