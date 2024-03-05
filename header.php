<?php
require_once 'config.php';
$asset_path = $config['site']['url'];
$URI = $config['site']['url'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="description" content="As the Tech Lead at Onest Tech LLC, I bring a diverse
        skill set and extensive experience to lead our technical teams. Proficient in PHP, NodeJs,
        Python, JavaScript, databases, system design, and DevOps, I excel in architecting robust solutions.">
    <meta name="keywords" content="front-end developer, bangladesh developer, web developer, fiver front-end developer, upwork front-end developer, professional developer, web developer, themeforest,  codecanyon, envato, portfolio, developer dhaka, Bangladesh,">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="sai4ul">
    <title>Md Rasheduzzaman - Jmrashed | Tech Lead at Onesttech LLC</title>
    <link rel="icon" type="image/x-icon" sizes="20x20" href="<?= $asset_path ?>assets/img/logo/favicon.png">
    <!-- icon -->
    <link rel="stylesheet" type="text/css" href="<?= $asset_path ?>assets/css/icon.css">
    <!-- Bootstrap css-->
    <link rel="stylesheet" type="text/css" href="<?= $asset_path ?>assets/css/bootstrap-5.0.2.min.css">
    <!-- Plugin -->
    <link rel="stylesheet" type="text/css" href="<?= $asset_path ?>assets/css/plugin.css">
    <!-- Main CSS -->
    <link rel="stylesheet" type="text/css" href="<?= $asset_path ?>assets/css/main-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

</head>
<!-- Loader -->
<div class="preloader">
    <div class="loader_img">
        <img class="loader-img" src="<?= $asset_path ?>assets/img/logo/loder.gif" alt="wait...">
    </div>
</div>


<body>
    <!-- <body oncontextmenu="return false"> -->
    <header>
        <div class="header-area header-transparent">
            <div class="header-top-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="header-top d-flex justify-content-between align-items-center flex-wrap">
                                <!-- Hiring -->
                                <p><span>Open to Work : </span> Seeking Tech Lead or Team Lead position, history of
                                    remarkable results ! <i class="icon-circles"><span></span></i></p>
                                <!-- Social -->
                                <ul class="header-social">

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom-wrapper">
                <div class="header-sticky">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12 ">
                                <div class="bottom-menu d-flex align-items-center justify-content-between flex-wrap   ">
                                    <div class="bottom-left d-flex align-items-center">
                                        <!-- Logo -->
                                        <div class="logo">
                                            <a href="index.html">
                                                <img src="<?= $asset_path ?>assets/img/logo/favicon.png" alt="img">
                                            </a>
                                        </div>
                                        <!-- Main-menu -->
                                        <div class="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li class="active">
                                                        <a href="<?= $URI ?>home">
                                                            <span class="number">00</span>
                                                            <span class="single">Home</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="<?= $URI ?>#experience">
                                                            <span class="number">01</span>
                                                            <span class="single">experience</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="<?= $URI ?>#portfolio">
                                                            <span class="number">02</span>
                                                            <span class="single">Project</span>
                                                        </a>
                                                    </li>


                                                    <li>
                                                        <a href="<?= $URI ?>#about">
                                                            <span class="number">03</span>
                                                            <span class="single">About</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="<?= $URI ?>#contact">
                                                            <span class="number">04</span>
                                                            <span class="single">Let's Talk</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="<?= $URI ?>explores">
                                                            <span class="number">05</span>
                                                            <span class="single">Explore More</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div class="bottom-right">
                                        <a href="<?= $asset_path ?>assets/docs/RASHED RESUME.pdf" target="_blank" class="header-btn btn-linear mr-15">
                                            <i class="fas fa-cloud-download-alt mr-6"></i>Download CV
                                        </a>
                                    </div>
                                    <!-- Mobile Menu -->
                                    <div class="col-12">
                                        <div class="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <!-- Light Style -->
        <div class="light-style">
            <button class="bulb">
                <div class="bulb-image">
                    <img src="<?= $asset_path ?>assets/img/gallery/bulb-on.png" alt="Light style">
                </div>
            </button>
        </div>