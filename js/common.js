$(function() {
/*--Main nav-----------------------------------*/ 

	$('.navbar-toggle').jPushMenu({ closeOnClickLink: false });
	$('.dropdown-toggle').dropdown();

/*--------------------------------------------------*/ 
	
	$('.promo-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		loop: true 
	});

	$('.article-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		loop: true 
	});

/*--popovers in Catalog section-----------------*/ 
/*!
* IE10 viewport hack for Surface/desktop Windows 8 bug
* Copyright 2014-2015 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/

// See the Getting Started docs for more information:
// http://getbootstrap.com/getting-started/#support-ie10-width

	(function () {
		'use strict';

		if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
			var msViewportStyle = document.createElement('style')
			msViewportStyle.appendChild(
				document.createTextNode(
					'@-ms-viewport{width:auto!important}'
				)
			)
			document.querySelector('head').appendChild(msViewportStyle)
		}
	})();


	$('.catalog-item-link').click(function(e) {
		e.preventDefault();
	});

	placePopover();

	$(window).on('resize', function() {
		placePopover();
	});


	$('a[data-toggle="popover"]').on('show.bs.popover', function() {
		$(this).addClass('active');
	});

	$('a[data-toggle="popover"]').on('hide.bs.popover', function() {
		$(this).removeClass('active');
	});

/*--Animation-------------------*/

	window.sr = ScrollReveal();
	sr.reveal('.reveal-anim', { duration: 800 });
	sr.reveal('.reveal-anim', { afterReveal: function(domEl) { 
			$(domEl).css({ 
				'-webkit-transform': 'none', 
				'transform': 'none'
			});
		} });
	sr.reveal('.reveal-left', { duration: 800, origin: 'left', distance: '100px' });
	sr.reveal('.reveal-right', { duration: 800, origin: 'right', distance: '100px' });
});

function placePopover() {
	var wwidth = $(window).outerWidth();

	if (wwidth < 550) {
		$('a[data-toggle="popover"]').popover('destroy');
		$('a[data-toggle="popover"]').popover({
			html: true,
			trigger: 'focus',
			placement: 'top',
			viewport: {selector: 'body'}
		});
	} else {
		$('a[data-toggle="popover"]').popover('destroy');
		$('a[data-toggle="popover"]').popover({
			html: true,
			trigger: 'focus',
			placement: 'auto right',
			viewport: {selector: 'body', padding: 0}
		});
	}
}


/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */
(function($) {
	$.fn.jPushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);
		/* add class to the body.*/
		
		$('body').addClass(o.bodyClass);
		$(this).addClass('jPushMenuBtn');
		$(this).click(function() {
			var target         = '',
			push_direction     = '';
			
			if($(this).is('.'+o.showLeftClass)) {
				target         = '.cbp-spmenu-left';
				push_direction = 'toright';
			}
			else if($(this).is('.'+o.showRightClass)) {
				target         = '.cbp-spmenu-right';
				push_direction = 'toleft';
			}
			else if($(this).is('.'+o.showTopClass)) {
				target         = '.cbp-spmenu-top';
			}
			else if($(this).is('.'+o.showBottomClass)) {
				target         = '.cbp-spmenu-bottom';
			}
			
			$(this).toggleClass(o.activeClass);
			$(target).toggleClass(o.menuOpenClass);
			
			if($(this).is('.'+o.pushBodyClass)) {
				$('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
			}
			
			/* disable all other button*/
			$('.jPushMenuBtn').not($(this)).toggleClass('disabled');
			
			return false;
		});
		var jPushMenu = {
			close: function (o) {
				$('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
			}
		}

    if(o.closeOnClickOutside) {
			$(document).click(function() {
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$(document).on('click touchstart', function(){
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$('.cbp-spmenu,.toggle-menu').click(function(e){
				e.stopPropagation();
			});

			$('.cbp-spmenu,.toggle-menu').on('click touchstart', function(e){
				e.stopPropagation();
			});
		}

        // On Click Link
        if(o.closeOnClickLink) {
            $('.cbp-spmenu a').on('click',function(){
                jPushMenu.close();
            });
        }
	};
 
   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	$.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true,
		closeOnClickLink: true
	};
})(jQuery);

function initMap() {
   // Styles a map in night mode.
   var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 55.748, lng: 37.536},
      zoom: 17,
      styles: [{
         "featureType": "administrative",
         "elementType": "all",
         "stylers": [
         { "saturation": "-100" }
         ]
      },
      {
         "featureType": "administrative.province",
         "elementType": "all",
         "stylers": [
         { "visibility": "off" }
         ]
      },
      {
         "featureType": "landscape",
         "elementType": "all",
         "stylers": [
         { "saturation": -100 },
         { "lightness": 65 },
         { "visibility": "on" }
         ]
      },
      {
         "featureType": "poi",
         "elementType": "all",
         "stylers": [
         { "saturation": -100 },
         { "lightness": "50" },
         { "visibility": "simplified" }
         ]
      },
      {
         "featureType": "road",
         "elementType": "all",
         "stylers": [
         { "saturation": "-100" }
         ]
      },
      {
         "featureType": "road.highway",
         "elementType": "all",
         "stylers": [
         { "visibility": "simplified" }
         ]
      },
      {
         "featureType": "road.arterial",
         "elementType": "all",
         "stylers": [
         { "lightness": "30" }
         ]
      },
      {
         "featureType": "road.local",
         "elementType": "all",
         "stylers": [
         { "lightness": "40" }
         ]
      },
      {
         "featureType": "transit",
         "elementType": "all",
         "stylers": [
         { "saturation": -100 },
         { "visibility": "simplified" }
         ]
      },
      {
         "featureType": "water",
         "elementType": "geometry",
         "stylers": [
         { "hue": "#ffff00" },
         { "lightness": -25 },
         { "saturation": -97 }
         ]
      },
      {
         "featureType": "water",
         "elementType": "labels",
         "stylers": [
         { "lightness": -25 },
         { "saturation": -100 }
         ]
      }
      ]
   });
   var marker = new google.maps.Marker({
      position: {lat: 55.748, lng: 37.533},
      map: map,
      icon: 'images/pin.png',
      title: '190000, г. Москва, ул. Яхтенная, д.10, оф.123'
   });
}