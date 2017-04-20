<?php get_header(); ?>
    <section id="blog" class="">
      <div class="grey-bg">
        <div class="wrapper">

          <div id="blog_filters" class="filter-button-group filters button-group custom-select">
            <div class="options">
            <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>
            </div>
          </div>

          <div id="blog_container" class="isotope_container">
            <!-- isotope plugin added here -->
            <!-- grid-sizer, gutter-sizer - are nesessary for isotope plugin-->
            <div class="grid-sizer"></div>
            <div class="gutter-sizer"></div>

            <?php get_template_part('loop'); ?>
          </div>

          <?php get_template_part('pagination'); ?>

        </div>
      </div>



    </section>
  </div>

<?php get_footer(); ?>
