@foreach ($errors->all() as $error)
    <div class="error">{{ $error }}</div>
@endforeach
 
<form action="{{ action('RegisteredUserController@store') }}" method="post">
    @csrf
		
		<div>
			<label for="username">Username:</label>
			<input type="text" name="username" value="">
		</div>
		<div>
			<label for="email">Email: </label>
			<input type="email" name="email" value="">
		</div>
		
		<div>
			<label for="password">Password:</label>
				<input type="password" name="password" value="">
			<label for="password_confirmation">Confirm password:</label>
				<input type="password" name="password_confirmation" value="">
		</div>
		
    <button>Register</button>
 
</form>