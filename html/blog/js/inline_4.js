

	$(document).ready(function(){

		$.ajaxSetup({cache:false});
		var counter = 2;
		$(".lookmore").click(function(){
			
			if (!$(this).hasClass('finished') ) {
				$('#ajax_content_storage').load('http://nataly-bolshakova.com.ua/blog/page/'+counter+' #blog_container .item', function(result) {
					var variable = $('#ajax_content_storage').html();
					if (variable) {
						$('#blog_container').append(variable);
						setTimeout( function(){
							$('#blog_container').isotope( 'reloadItems' ).isotope({ layoutMode: 'masonry' });
						}, 700);
					} else {
						$('.lookmore').addClass('finished');
					}
				});
				counter++;
				return false;
			}
		});

	});		
	
