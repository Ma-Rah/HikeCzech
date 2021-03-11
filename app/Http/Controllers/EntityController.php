<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entity;
use App\Models\Point;


class EntityController extends Controller
{
    public function show(Request $request, $entity_id) 
	{
		
		$info = Entity::with('city')->findOrFail($entity_id);


		dd($info);

		return 'Hello from show entity';
	}

	public function create(Request $request) 
	{
		dd($request);
	}
}
