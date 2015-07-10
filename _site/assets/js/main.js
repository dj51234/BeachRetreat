$(document).ready(function() {
	$('.all-gallery').hide();
	$('.back-btn').hide();
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});
	workSlider();
	projectLoad();
	formLoad();
	formAnimations();
	mobileNav();
	galleryLoad();
});

$(window).scroll(function() {

	var winScroll = $(this).scrollTop();
	var $sticky = $('.nav');
	
	// var offset = winScroll - $('#gallery').offset().top + $(window).height();


	$sticky.waypoint(function(direction) {
		if (direction === 'down') {
			$sticky.addClass('stuck');
		} else {
			$sticky.removeClass('stuck');
		}

	});
});

function workSlider() {
	$('.image-unit .image, .image-unit .link').click(function() {
		$('.work-slider').css({'left' : '-100%'});
		$('.project-container').show();

	});
	$('.ion-chevron-left').click(function() {
		$('.work-slider').css({'left' : '0%'});
		$('.project-container').fadeOut('fast');
	});
}

function projectLoad() {

	$.ajaxSetup({cache:true});

	$('.image-unit .image').click(function() {
		var $this = $(this);
		var workLoad = $this.data('work');
		var newHTML = 'work/' + workLoad + '.html';
		var newTitle = $this.parent().find('.loadTitle').text();

		$('.project-content').load(newHTML);
		$('.project .title').text(newTitle);
		

	});

}

function formLoad() {

	$('.load-btn').click(function(event) {
		event.preventDefault();
		$('.con-form').toggle(300);

	});

	$('.con-btn').click(function(event) {
		event.preventDefault();
		$('.con-form').hide(500);
	});

}

function formAnimations() {
	$('#icon1').click(function() {
		$('.ion-ios-person-outline').hide(500);
		$('#label1').css({'transform' : 'scale(.8) translate(-55px, -40px)'});
	});
	$('#icon2').click(function() {
		$('.ion-ios-paper-outline').hide(500);
		$('#label2').css({'transform' : 'scale(.8) translate(-58px, -40px)'});
	});
	$('#icon3').click(function() {
		$('.ion-ios-email-outline').hide(500);
		$('#label3').css({'transform' : 'scale(.8) translate(-55px, -40px)'});
	});
}

function mobileNav() {
	$('.ion-navicon-round, .mobile-nav').click(function() {
		if ($('.mobile-nav').height() == 450) {
			// $('.mobile-nav').animate({width:'80px'},{duration:500, queue:false});
			$('.mobile-nav').animate({height:60},{duration:500, queue:false});
			$('.dropdown').slideUp(300);
		} else {
			// $('.mobile-nav').animate({width:'100%'},{duration:500, queue:false});
			$('.mobile-nav').animate({height:450},{duration:500, queue:false});
			$('.dropdown').show(10);
		}
		
;
	});
}

function galleryLoad() {
	$('.view-more').click(function(event) {
		event.preventDefault();
		$('.all-gallery, .back-btn').toggle(50);

	});
	$('.back-btn').click(function(event) {
		event.preventDefault();
		$('.all-gallery').hide(200);
		$(this).hide();

	});
}






