<?php

/**
 * Bootstrap the application
 *
 * @return void
 */
function start_app()
{
    require_once __DIR__ . '/cv.class.php';
    require_once __DIR__ . '/templates/index.php';
}

/**
 * Fetch class instance
 *
 * @return Cv
 */
function cv()
{
    static $instance = null;

    if (is_null($instance)) {
        $instance = new Cv();
    }

    return $instance;
}
