@extends('layouts.main')

@section('content')

<form action="/" method="" >
			@csrf
            <label htmlFor="">Email</label>
            <br />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
 
            <br />

            <label htmlFor="">Password</label>
            <br />
            <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <br />

            <button>Login</button>
        </form>


@endsection