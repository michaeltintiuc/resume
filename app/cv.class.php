<?php

class Cv
{
    /**
     * Class initialization
     *
     * @return void
     */
    public function __construct()
    {
        $this->parseSchema();
    }

    /**
     * Parse the json schema file
     *
     * @return void
     */
    protected function parseSchema()
    {
        $schema = file_get_contents(__DIR__.'/../schema.json');
        $json = json_decode($schema, true);

        foreach($json as $key => $value) {
            $this->{$key} = $value;
        }
    }

    /**
     * Magic setter method
     *
     * @param  string $attr
     * @param  mixed $value
     * @return void
     */
    public function __set($attr, $value)
    {
        $this->{$attr} = $value;
    }

    /**
     *
     * @param  string $size
     * @return void
     */
    public function getImage($size)
    {
        return $this->images[$size];
    }
}
