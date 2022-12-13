<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

         <!--     Fonts and icons     -->
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
          <!-- Nucleo Icons -->
          <link href="{!! asset('assets/css/nucleo-icons.css') !!}" rel="stylesheet" />
          <link href="{!! asset('assets/css/nucleo-svg.css') !!}" rel="stylesheet" />
          <!-- Font Awesome Icons -->
          <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
          <!-- Material Icons -->
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
          <!-- CSS Files -->
          <link id="pagestyle" href="{!! asset('assets/css/material-dashboard.min.css?v=1.0.6') !!}" rel="stylesheet" />

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
