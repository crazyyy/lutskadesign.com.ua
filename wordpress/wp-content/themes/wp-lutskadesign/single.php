<?php get_header(); ?>

    <section id="single-new" class="">
      <div class="wrapper limited">
        <div class="filters button-group custom-select">
          <div class="options">
            <?php if (function_exists('easy_breadcrumbs')) easy_breadcrumbs(); ?>
          </div>
        </div>
      </div>
      <div class="wrapper content-holder limited tablet-white-bg">
        <div class="columns">
          <?php if (have_posts()): while (have_posts()) : the_post(); ?>
            <section class="page_content">
              <div class="header">
                <div class="img-container big-img" style="background-image: url(<?php the_post_thumbnail_url( 'medium' ); ?>); background-position: 50% 60%;">
                  <div class="social">
                    <a href="#" class="soc-icon">
                      <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                        <use xlink:href="#iconFb" />
                      </svg>
                    </a>
                    <a href="#" class="soc-icon">
                      <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                        <use xlink:href="#iconGp" />
                      </svg>
                    </a>
                    <a href="#" class="soc-icon">
                      <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                        <use xlink:href="#iconTw" />
                      </svg>
                    </a>
                    <a href="#" class="soc-icon">
                      <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                        <use xlink:href="#iconVk" />
                      </svg>
                    </a>
                    <a href="#" class="soc-icon">
                      <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                        <use xlink:href="#iconPt" />
                      </svg>
                    </a>
                  </div><!-- social -->
                </div>
              </div>
              <div class="content">

                <h1><?php the_title(); ?></h1>
                <hr>
                <?php if(get_field('label')) { ?>
                  <p class="label"><?php the_field('label') ?></p>
                <?php } ?>

                <?php the_content(); ?>

              </div>

              <div class="footer">
                <div class="social">
                  <span class="text">Рассказать друзьям:</span>
                  <a href="#" class="soc-icon">
                    <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                      <use xlink:href="#iconFb" />
                    </svg>
                  </a>
                  <a href="#" class="soc-icon">
                    <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                      <use xlink:href="#iconGp" />
                    </svg>
                  </a>
                  <a href="#" class="soc-icon">
                    <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                      <use xlink:href="#iconTw" />
                    </svg>
                  </a>
                  <a href="#" class="soc-icon">
                    <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                      <use xlink:href="#iconVk" />
                    </svg>
                  </a>
                  <a href="#" class="soc-icon">
                    <svg preserveaspectratio="none" class="soc-icon-image" viewbox="0 0 32 32">
                      <use xlink:href="#iconPt" />
                    </svg>
                  </a>
                </div>
              </div>
            </section>
          <?php endwhile; endif; ?>

          <?php get_sidebar(); ?>

        </div>

        <div class="bottom-nav-buttons">
          <div class="button-holder">
            <a class="lookmore button" href="<?php echo home_url(); ?>/blog.htm">Все новости</a>
          </div>
        </div>

      </div>
    </section>
  </div>

<?php get_footer(); ?>
