<?php

use Timber\Timber;
use Timber\Post;

$context = Timber::get_context();
$context['posts'] = [];

while (have_posts()) : the_post();
    $post = new Post();
    $context['posts'][] = $post;
endwhile; // End of the loop.

Timber::render(['views/front-page.twig'], $context);