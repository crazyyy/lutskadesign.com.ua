

					var empSwiper = undefined;

					function employeeSwiper() {
						var screenWidth = window.innerWidth || $(window).width();
						if(screenWidth <= 1024) {
							$('.employee-swiper').removeClass('arrange-slides');
						    if (typeof empSwiper == 'undefined') {
						        empSwiper = new Swiper('.employee-swiper', {
						            slidesPerView: 5,
									spaceBetween: 20,
									loop: true,
									nextButton: '.slider-arrow-right',
									prevButton: '.slider-arrow-left',
									breakpoints: {
							            1024: {
							                slidesPerView: 3
							            },
							            768: {
							                slidesPerView: 2
							            },
							            639: {
							                slidesPerView: 1
							            }
							        }			
						        });
						    }
						} else {
							$('.employee-swiper').addClass('arrange-slides');
						    if (typeof empSwiper != 'undefined') {
						        empSwiper.destroy();
						        empSwiper = undefined;
						        $('.employee-swiper .swiper-wrapper').removeAttr('style');
						        $('.employee-swiper .swiper-slide').removeAttr('style');
						    }
						}

					}

					$(document).ready( function(){
						employeeSwiper();
						
					});
					$(window).on('resize', function(){
						employeeSwiper();
					});
				
				