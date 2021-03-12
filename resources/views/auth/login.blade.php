@auth
            Logged in as {{ Auth::user()->name }}

            <form action="{{ route('logout') }}" method="post">
                @csrf
                <input type="submit" value="Logout">
            </form>

            @can('admin')

                <strong>You are an administrator</strong>

            @endcan

        @else

            <a href="{{ route('login') }}">Log in</a>

        @endauth