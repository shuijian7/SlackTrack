<?php
/**
 Derived from https://ilovephp.jondh.me.uk/en/tutorial/make-your-own-blog, called by the major pages back end files housed
 in the same folder. Is used around html variables in php functions to maintain html properties which allows for more 
 consistent handling of variables. Written by Tyler Millan. Last Updated 05/12/2019.
 *
 */
function escape($html) {
    return htmlspecialchars($html, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8");
}
