<?php

// Define the environment (development, production, testing, etc.)
define('ENVIRONMENT', 'development'); // You can set this in your server configuration

// Database configuration
$config['database']['host'] = 'localhost';
$config['database']['username'] = 'your_db_username';
$config['database']['password'] = 'your_db_password';
$config['database']['name'] = 'your_db_name';

// Site configuration
$config['site']['name'] = 'Rasheduzzaman';
$config['site']['url'] = 'http://rasheduzzaman.test/';
// Add other site-wide configurations as needed

// Paths
$config['paths']['include'] = __DIR__ . '/includes/';
$config['paths']['template'] = __DIR__ . '/templates/';
// Add other path configurations as needed

// Other configuration settings
$config['debug'] = true;
$config['timezone'] = 'UTC';
// Add other global settings as needed

// Environment-specific configurations
if (ENVIRONMENT === 'production') {
    // Production-specific settings
    $config['debug'] = false;
    // Add other production configurations
} elseif (ENVIRONMENT === 'testing') {
    // Testing-specific settings
    // Add other testing configurations
}

// You can add more sections or nested arrays as needed

return $config;
