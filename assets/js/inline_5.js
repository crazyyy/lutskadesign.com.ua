
	


	$(document).ready(function(){

		$.ajaxSetup({cache:false});
		var variable = $('#ajax_content_storage .page-1').html();
		// console.log(variable);
		$('#homeprojects #container').append(variable);
		
		//init Isotope for home page
		var $homeprojects_container = $('#homeprojects #container');
		$homeprojects_container.isotope({
			itemSelector: '#homeprojects #container .item',
			layoutMode: 'masonry',
			masonry: {
				columnWidth: "#homeprojects #container .grid-sizer",
				gutter: "#homeprojects #container .gutter-sizer",
				itemSelector: '#homeprojects #container .item'
			}
		});
		
		var counter = 2;
		$(".lookmore").click(function(){
			
			if (!$(this).hasClass('finished') ) {

				variable = $('#ajax_content_storage .page-'+counter).html();
				if (variable) {
					$('#homeprojects #container').append(variable).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
				} else {
					$('.lookmore').addClass('finished');
				}
				counter++;
				return false;
			}
		});
		

	});		
	

	$( function() {
		$('.homeslider').vegas({
			delay: 7000,
			timer: false,
			slides: [
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2016/09/16-07-28-221.jpg' },
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_07_size.jpg' },
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_02_size.jpg' },
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_04_size.jpg' },
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_03_size.jpg' },
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_01_size.jpg' },
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_05_size.jpg' },
								{ src: 'http://nataly-bolshakova.com.ua/wp-content/uploads/2015/10/Slideshow_06_size.jpg' },
							],
			transitionDuration: '2000'
		});
	});
					
	$(document).ready(function() {
		
		$('.slider-next').click(function(e){
				e.preventDefault();
				$('.homeslider').vegas('next');
		});
		
		$('.slider-prev').click(function(e){
				e.preventDefault();
				$('.homeslider').vegas('previous');
		});


		$('body').bind('vegaswalk', function(e, bg, step) {
			
			$('.slide_text:eq(' + window.SwitchHomeCount + ')').stop(false, true).fadeOut(1000);
			
			SwitchHomeCount = bg;
			
			$('.slide_text:eq(' + window.SwitchHomeCount + ')').fadeIn(1000);

		});
	});

