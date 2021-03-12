<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class RegisteredUserController extends Controller
{
   public function create()
   {
	   return view('auth.register');
   }

   public function store(Request $request)
   {

		// Validate form input
		$this->validate($request, [
			'username' => 'required|max:255',
			'email' => 'required|email|max:255',
			'password' => 'required|confirmed',
		]);
		// add User to database
		User::create([
			'username' => $request->username,
			'email'=> $request->email,
			'password' => Hash::make($request->password),
		]);

		return 'user saved';

   }

}
