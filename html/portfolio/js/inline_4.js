

	$(document).ready(function(){

		$.ajaxSetup({cache:false});
		var counter = 2;
		$(".lookmore").click(function(){
			
			if (!$(this).hasClass('finished') ) {
				$('#ajax_content_storage').load('http://nataly-bolshakova.com.ua/portfolio/page/'+counter+' #projects_container .item', function(result) {
					var variable = $('#ajax_content_storage').html();
					if (variable) {
						$('#projects_container').append(variable).isotope( 'reloadItems' ).isotope({ sortBy: 'original-order' });
					} else {
						$('.lookmore').addClass('finished');
					}
				});
				counter++;
				return false;
			}
		});

	});		
	
