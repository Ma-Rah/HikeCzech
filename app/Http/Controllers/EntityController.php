<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entity;
use App\Models\Point;


class EntityController extends Controller
{
    public function show(Request $request, $entity_id) 
	{
		
		$info = Entity::with('points')->findOrFail($entity_id);


		dd($info);

		return 'Hello from show entity';
	}

	public function create() 
	{
		$entity = new Entity;
		$entity->name = "Second entity";
		$entity->save();
		return "saved";
	}

	public function details()
	{
		return view('entity/details');
	}

	public function map()
	{
		return view('entity/map');
	}
}
