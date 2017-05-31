/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#myCarousel1, #carousel-example-generic, #carousel-example-generic-0, #carousel-example-generic-01, #carousel-example-generic-02, #carousel-example-generic-03, #carousel-example-generic-04, #carousel-example-generic-07, #carousel-example-generic-09, #carousel-example-generic-11, #carousel-example-generic-13, #carousel-example-generic-14, #carousel-example-generic-15, #carousel-example-generic-16, #carousel-example-generic-17, #carousel-example-generic-18, #carousel-example-generic-19, #carousel-example-generic-20'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
	$myCarousel.carousel(
	  interval: 50000
	);
	
})(jQuery);