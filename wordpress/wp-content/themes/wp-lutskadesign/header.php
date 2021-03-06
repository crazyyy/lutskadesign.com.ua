<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

  <title><?php wp_title( '' ); ?><?php if ( wp_title( '', false ) ) { echo ' :'; } ?> <?php bloginfo( 'name' ); ?></title>

  <link href="http://www.google-analytics.com/" rel="dns-prefetch"><!-- dns prefetch -->

  <!-- icons -->
  <link href="<?php echo get_template_directory_uri(); ?>/favicon.ico" rel="shortcut icon">

  <!--[if lt IE 9]>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
  <![endif]-->
  <!-- css + javascript -->
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

  <nav id="menu">
    <?php wpeHeadNav(); ?>
  </nav>

  <div id="mob_menu">
    <nav class="side-menu">
      <a class="toggle-menu menu-close">
        <span class="cross">
          <svg preserveaspectratio="none" class="close-menu" viewbox="0 0 17 15">
            <use xlink:href="#close-cross"/>
          </svg>
        </span>
      </a>
      <?php wpeHeadNav(); ?>
      <div class="sidemenu-footer">
        <div class="phone">
          <a href="tel:+380675179595">+38 067 517 95 95</a>
        </div>
        <div class="address">Киев, Ул. Болсуновская, 2</div>
        <div class="social">
          <a href="mailto:#" class="soc-icon">
            <svg preserveaspectratio="none" class="soc-icon-image mail" viewbox="0 0 32 32">
              <use xlink:href="#iconMenuMail" />
            </svg>
          </a>
          <a href="#" class="soc-icon external" target="_blank" rel="nofollow">
            <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
              <use xlink:href="#iconGp" />
            </svg>
          </a>
          <a href="#" class="soc-icon external" target="_blank" rel="nofollow">
            <svg preserveaspectratio="none" class="soc-icon-image facebook" viewbox="0 0 32 32">
              <use xlink:href="#iconFb" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  </div>
  <div id="page">
    <div id="pusher">
