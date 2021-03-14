<!DOCTYPE html>
<html lang="en">
<head>
	
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	@if (Auth::check())
		<meta name="user-id" content="{{ Auth::id() }}">
	@endif

    <title>{{ $title ?? '' }} | {{ env('APP_NAME') }}</title>

    <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    @yield('head_styles')
</head>
<body>

    <header>
		@yield('navbar')
    </header>

    
    <main>

        @yield('content')
		
    </main>

</body>
</html>