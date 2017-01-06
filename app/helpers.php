<?php

function start_app()
{
    require_once __DIR__.'/cv.class.php';
    show('index');
}

function cv()
{
    static $instance = null;

    if (!$instance)
        $instance = new Cv();

    return $instance;
}

function show($file, $dir = 'templates')
{
    require_once __DIR__."/$dir/$file.php";
}
