<?php

class Cv
{
    public function __construct()
    {
        $this->parseSchema();
    }

    protected function parseSchema()
    {
        $schema = file_get_contents(__DIR__.'/../schema.json');
        $json = json_decode($schema, true);

        foreach($json as $key => $value)
            $this->{$key} = $value;
    }

    public function __set($attr, $value)
    {
        $this->{$attr} = $value;
    }

    public function getImage($size)
    {
        return $this->images[$size];
    }
}
