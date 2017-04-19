 $(function() {
   $("#slider_1858052491").vegas({
     delay: 7000,
     timer: false,
     slides: [{
       src: "http://nataly-bolshakova.com.ua/wp-content/uploads/2016/05/8new.jpg",
       cover: false
     }, {
       src: "http://nataly-bolshakova.com.ua/wp-content/uploads/2016/04/aretha-unique-classic-ceiling-dining-graceful-lamp-01.jpg",
       cover: false
     }, ],
     walk: function(index, slideSettings) {
       var total = this[0]["_vegas"]["total"];
       $("#slider_1858052491 .slide-info").text((index + 1) + "/" + total);
     },
     transitionDuration: "2000"
   });
 });
 $(document).ready(function() {
   $("#slider_1858052491 .slider-next").click(function(e) {
     e.preventDefault();
     $("#slider_1858052491").vegas("next");
   });
   $("#slider_1858052491 .slider-prev").click(function(e) {
     e.preventDefault();
     $("#slider_1858052491").vegas("previous");
   });
 });
