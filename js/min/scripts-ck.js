$(document).ready(function(){
	$('html, body').animate({scrollTop:0},0);
	TweenMax.set('#loader', {className:"+=loading"});
	
	animHeader();
	$('#menu').onePageNav();
	
	// Défini les différentes routes
	var AppRouter = Backbone.Router.extend({
		routes: {
		    "": "home",
		    "home": "home",
		    "home/simpson-museum": "work1",
		    "home/handly": "work2",
		    "home/antikythera": "work3",
		    "home/dreamcatcher": "work4"
		}
	});

	// initialise le router
	var app_router = new AppRouter;

	// on route 'home' : 
	app_router.on('route:home', function () {
		TweenMax.set('#work1, #work2, #work3, #work4', {display:'none'});

		if ($('body').hasClass('onworkpage')) {
			TweenMax.to('section.workpage',0.4, {opacity:0,display:'none',onComplete:function(){
				$('html, body').animate({scrollTop:0},0);
			}});
			TweenMax.to('#homeWrap', 0.4,{opacity:1,display:'block',delay:0.4});
			TweenMax.to('header', 0.3, {top:'0px',ease:Power2.easeInOut,delay:0.8});
			$('body').removeClass().addClass('homepage');
		} else if ($('body').hasClass('onhomepage')) {
			TweenMax.set('#loader', {className:"-=loading"});
			$('html, body').animate({ scrollTop: 0 }, 0);
			TweenMax.staggerFrom('.home-cover, .home-baseline>*', 0.5, {opacity:0,y:50,ease:Power2.easeOut,delay:0.9}, 0.1);
		} else {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut,delay:0.5});
			TweenMax.set('#loader', {className:"-=loading",delay:0.9});
			TweenMax.staggerFrom('.home-cover, .home-baseline>*', 0.5, {opacity:0,y:50,ease:Power2.easeOut,delay:0.9}, 0.1);
			$('body').removeClass().addClass('homepage');
		}

	});


	app_router.on('route:work1', function () {
		TweenMax.set('#work2, #work3, #work4', {display:'none'});

		if ($('body').hasClass('onworkpage')) {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut});
			TweenMax.set('#loader', {className:"-=loading",delay:0.4});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('html, body').animate({scrollTop:0},0);
			}});
			TweenMax.to('section#work1', 0.6, {opacity:1,display:'block',delay:0.65});
		} else if ($('body').hasClass('homepage')){
			TweenMax.to('header', 0.3, {top:'-82px',ease:Power2.easeInOut});
			TweenMax.to('#homeWrap', 0.6, {opacity:0,ease:Power2.easeInOut});
			TweenMax.set('#homeWrap', {display:'none',delay:0.6,onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({scrollTop:0},0);
			}});
			TweenMax.to('section#work1', 0.6, {opacity:1,display:'block',delay:0.65,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		} else {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut,delay:0.5});
			TweenMax.set('#loader', {className:"-=loading",delay:0.5});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({scrollTop:0},0);
			}});
			TweenMax.to('section#work1', 0.6, {opacity:1,display:'block',delay:0.5,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		}
		$('#carousel').roundabout({
			childSelector:"img", 
			minOpacity:0.6,
			autoplay:false
		});
	});
	app_router.on('route:work2', function () {
		TweenMax.set('#work1, #work3, #work4', {display:'none'});

		if ($('body').hasClass('onworkpage')) {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut});
			TweenMax.set('#loader', {className:"-=loading",delay:0.4});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work2', 0.6, {opacity:1,display:'block',delay:0.65});
		} else if ($('body').hasClass('homepage')){
			TweenMax.to('header', 0.3, {top:'-82px',ease:Power2.easeInOut});
			TweenMax.to('#homeWrap', 0.6, {opacity:0,ease:Power2.easeInOut});
			TweenMax.set('#homeWrap', {display:'none',delay:0.6,onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work2', 0.6, {opacity:1,display:'block',delay:0.65,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		} else {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut,delay:0.5});
			TweenMax.set('#loader', {className:"-=loading",delay:0.5});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work2', 0.6, {opacity:1,display:'block',delay:0.5,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		}
	});
	app_router.on('route:work3', function () {
		TweenMax.set('#work1, #work2, #work4', {display:'none'});

		if ($('body').hasClass('onworkpage')) {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut});
			TweenMax.set('#loader', {className:"-=loading",delay:0.4});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work3', 0.6, {opacity:1,display:'block',delay:0.65});
		} else if ($('body').hasClass('homepage')){
			TweenMax.to('header', 0.3, {top:'-82px',ease:Power2.easeInOut});
			TweenMax.to('#homeWrap', 0.6, {opacity:0,ease:Power2.easeInOut});
			TweenMax.set('#homeWrap', {display:'none',delay:0.6,onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work3', 0.6, {opacity:1,display:'block',delay:0.65,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		} else {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut,delay:0.5});
			TweenMax.set('#loader', {className:"-=loading",delay:0.5});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work3', 0.6, {opacity:1,display:'block',delay:0.5,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		}
	});
	app_router.on('route:work4', function () {
		TweenMax.set('#work1, #work2, #work3', {display:'none'});

		if ($('body').hasClass('onworkpage')) {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut});
			TweenMax.set('#loader', {className:"-=loading",delay:0.4});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work4', 0.6, {opacity:1,display:'block',delay:0.65});
		} else if ($('body').hasClass('homepage')){
			TweenMax.to('header', 0.3, {top:'-82px',ease:Power2.easeInOut});
			TweenMax.to('#homeWrap', 0.6, {opacity:0,ease:Power2.easeInOut});
			TweenMax.set('#homeWrap', {display:'none',delay:0.6,onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work4', 0.6, {opacity:1,display:'block',delay:0.65,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		} else {
			TweenMax.to('#loader', 0.4, {opacity:0,display:'none',ease:Power2.easeInOut,delay:0.5});
			TweenMax.set('#loader', {className:"-=loading",delay:0.5});
			TweenMax.set('#homeWrap', {display:'none',onComplete:function(){
				$('body').removeClass().addClass('onworkpage');
				$('html, body').animate({ scrollTop: 0 }, 0);
			}});
			TweenMax.to('section#work4', 0.6, {opacity:1,display:'block',delay:0.5,onComplete:function(){
				// var script = document.createElement( "script" );
				// script.type = "text/javascript";
				// script.src = "js/carousel.js";
				// $('body').append(script);
			}});
		}
	});

    Backbone.history.start();

	// functions : 

	function animHeader() {
		var   header = $('header'),
		headerHeight = header.height(),
			  offset = 0,
			 lastPos = 0;
		var newPos = $(document).scrollTop(),
			   pos = newPos-lastPos; 
		if(offset+pos>headerHeight){ 
			offset = headerHeight;
		} else if(newPos < 0){ 
			offset = 0;
		} else {
			offset = offset+pos;
		}
		if (offset < 0){
			offset = 0;
		} else {
			offset = offset;
		}
		header.css('top', (-offset)+'px');
		lastPos = newPos;
	}

})