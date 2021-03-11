<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Region;
use App\Models\Entity;


class City extends Model
{
    use HasFactory;

	public function region()
	{
		return $this->belongsTo(Region::class);
	}

	public function entities()
	{
		return $this->hasMany(Entity::class);
	}
}
