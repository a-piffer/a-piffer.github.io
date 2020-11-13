/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$footer = $('#footer'),
		$main = $('#main');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Reorganize the content from the biography according to screen ratio
		var $info = $('#info');
		var $avatar = $('#avatar');
		var $bio = $('#bio');
		breakpoints.on('<=medium', function() {
			$('#major').insertBefore($avatar);
			$('#contact').insertAfter($info);
		});

		breakpoints.on('>medium', function() {
			$('#major').insertBefore($bio);
			$('#contact').appendTo($info);
		});
	
	// Autoplay animations in mobile screen
		if (browser.mobile) {
			//breakpoints.on('<=small', function() {
				const config = { rootMargin: '-49% 0px -51% 0px', threshold: [0, 1] };
				observer = new IntersectionObserver((entries) => {
				  entries.forEach(entry => {
					if (entry.intersectionRatio > 0) {
						entry.target.currentTime = 0;
						entry.target.play();	
						entry.target.classList.add('isFocus');
					} else {
						entry.target.pause();
						entry.target.classList.remove('isFocus');
					}
				  });
				}, config);

				document.querySelectorAll('.lazyvideo').forEach((item) => {
				  observer.observe(item);
				});
			//});
		}
		else {
			$(document).ready(function() {
			  $(".lazyvideo").on("mouseover", function(event) {
				this.currentTime = 0;
				this.play();
				this.classList.add('isFocus');

			  }).on('mouseout', function(event) {
				this.pause();
				this.classList.remove('isFocus');
			  });
			})
		}
	
	
	// Show all titles in the category list
	$('.hiddenlist').next('ul').hide();
	$(".hiddenlist").click(function(){
	  $(this).next("ul").slideToggle();
	  $(this).hide();
	});
		
})(jQuery);