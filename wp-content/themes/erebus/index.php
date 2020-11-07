<?php

use Timber\Timber;
use ThinkingJuice\IndexController;

$page = IndexController::indexAction();

Timber::render($page['templates'], $page['context']);