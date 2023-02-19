<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <!-- Scripts -->
        @vite(['resources/sass/app.scss', 'resources/js/app.ts'])
        
        <!-- Favicon -->
        <link rel="icon" type="image/png" href="/favicon.png"/>
        
        <!-- SEO -->
        
        <title>Martin Šmehýl</title>
        <meta name="description"        content="Krátky prehľadom o mne, mojej minulosti, súčasnosti a teoretickej budúcnosti">
        <meta property="og:title"       content="Martin Šmehýl">
        <meta property="og:url"         content="/logo.webp">
        <meta property="og:description" content="Krátky prehľadom o mne, mojej minulosti, súčasnosti a teoretickej budúcnosti">
        <meta property="og:image"       content="/logo.webp">
        

    </head>
    
    <body>
        <div id="app"></div> 
    </body>

        
</html>
