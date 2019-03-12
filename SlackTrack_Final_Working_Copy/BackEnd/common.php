<?php
/**
 Derived from https://ilovephp.jondh.me.uk/en/tutorial/make-your-own-blog, called by php database functions in index.php. Is used around html variables in php functions to maintain html properties which allows for more consistent handling of variables. Written by Tyler Millan.
 *
 */
function escape($html) {
    return htmlspecialchars($html, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8");
}
