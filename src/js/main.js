$(document).ready(function(){
	$('.menuBarToggle').on('click', function(e){
		e.preventDefault();

		var menuBar = $('.menuBar');
		var menuBarWidth = $('.menuBar').width();
		var menuBarButton = $('#menuButton');

		menuBar.toggleClass("open");

		if (menuBar.hasClass("open")) {
			menuBar.animate({
				right: "0px"
			});
			menuBarButton.animate({
				right: menuBarWidth+5,
			}, 250);
		} else {
			menuBar.animate({
				right: -menuBarWidth
			},250);
			menuBarButton.animate({
				right: "1em"
			}, 250);
		}
	});

	$('.menuBarLink').on('click', function(){
		var menuBar = $('.menuBar');
		var menuBarWidth = $('.menuBar').width();
		var menuBarButton = $('#menuButton');

		menuBar.toggleClass("open");

		menuBar.animate({
				right: -menuBarWidth
			},250);
			menuBarButton.animate({
				right: "1em"
			}, 250);
		});

	//Event Slideshows
	var auto_slide = 1;
	var hover_pause = 1;
	var auto_slide_seconds = 2500;

	$('#carousel-ul li:first').before($('#carousel-ul li:last'));

	//checking autosliding enabled
	if(auto_slide === 1){
		var timer = setInterval('slide("right")', auto_slide_seconds);
		$('#hidden_auto_slide_seconds').val(auto_slide_seconds);
	}

	if(hover_pause === 1){
		$('#carousel-ul').hover(function(){
			clearInterval(timer)
		}, function(){
			timer = setInterval('slide("right")', auto_slide_seconds);
		});
	}
});

function slide(where){
	var item_width = $('#carousel-ul li').outerWidth() + 10;
	if (where === "left"){
		var left_indent = parseInt($('#carousel-ul').css('left')) + item_width;
	} else {
		var left_indent = parseInt($('#carousel-ul').css('left')) - item_width;
	}
	$('#carousel-ul:not(:animated)').animate({'left':left_indent}, 500, function(){
		if(where === 'left'){
			$('#carousel-ul li:first').before($('#carousel-ul li:last'));
		} else {
			$('#carousel-ul li:last').after($('#carousel-ul li:first'));
		}
		$('#carousel-ul').css({'left':item_width});
	});
}
