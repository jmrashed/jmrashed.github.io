<?php

// Get the requested URL
$request_uri = $_SERVER['REQUEST_URI'];

// Remove leading and trailing slashes
$request_uri = trim($request_uri, '/');

// Split the URL into segments
$segments = explode('/', $request_uri);

// Define the routes
$routes = [
    'home' => 'home.php',
    'blogs' => 'blogs.php',
    'blog' => 'blog-details.php',
    '' => 'home.php',
    'explores' => 'explores.php',
    'database-design' => 'database-design.php',
    // 'explore-details' => 'explore-details.php',
];

// Check if the requested route exists
$route = isset($segments[0]) ? $segments[0] : 'home';

// Check if the route is defined
if (array_key_exists($route, $routes)) {
    // Include the associated file
    include $routes[$route];
} elseif ($route === 'explore-details' && isset($segments[1])) {
    // Handle explore-details with tag parameter
    $tag = $segments[1];
    include 'explore-details.php';
} else {
    // Handle 404 - Page not found
    echo "404 - Page not found";
}
