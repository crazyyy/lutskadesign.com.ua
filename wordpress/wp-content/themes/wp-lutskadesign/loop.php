<?php if (have_posts()): while (have_posts()) : the_post(); ?>
  <div id="post-<?php the_ID(); ?>" <?php post_class('item'); ?> >
    <a class="blog-img black-hover" href="<?php the_permalink(); ?>">
      <?php if ( has_post_thumbnail()) :
        the_post_thumbnail('medium');
      else: ?>
        <img src="<?php echo catchFirstImage(); ?>" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
      <?php endif; ?>
      </a>
    <div class="excerpt">
      <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
      <?php wpeExcerpt('wpeExcerpt40'); ?>
      <p class="date"><?php the_time('j F Y'); ?></p>
    </div>
  </div>
<?php endwhile; endif; ?>


