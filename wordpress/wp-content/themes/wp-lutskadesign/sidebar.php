<section class="sidebar">
  <ul class="news-list">

    <?php query_posts("showposts=3"); ?>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <li class="news-item">
        <div class="img-container">
          <a class="black-hover" href="<?php the_permalink(); ?>">
            <?php if ( has_post_thumbnail()) :
              the_post_thumbnail('medium');
            else: ?>
              <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
            <?php endif; ?>
          </a>
        </div>
        <div class="text-container">
          <h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
          <?php wpeExcerpt('wpeExcerpt10'); ?>
        </div>
      </li>
    <?php endwhile; endif; ?>
    <?php wp_reset_query(); ?>

  </ul>
</section>
<!-- END: sidebar  -->
