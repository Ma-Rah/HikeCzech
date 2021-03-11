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
		return	$this->belongsTo(City::class);
	}

	public function points() 
	{
		return $this->hasMany(Point::class);
	}

	public function trails() 
	{
		return	$this->hasMany(Trail::class);
	}
}

