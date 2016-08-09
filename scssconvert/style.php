<?php
$directory = "../scss/";

require "scssphp/scss.inc.php";
use Leafo\ScssPhp\Server;

scss_server::serveFrom($directory);

?>