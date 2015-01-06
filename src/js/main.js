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
});
