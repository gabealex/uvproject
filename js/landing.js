$(document).ready(function() {

	$.extend($.scrollTo.defaults, {
	  duration: 2000
	});
	
	$('#click1').click(function() {
		$('html,body').animate({
          scrollTop: 0,
          easing: 'swing'
        }, 1000);
	});

	$('#click2').click(function() {
		var position = $('#whoWeAre').offset();
		$('html,body').animate({
          scrollTop: position.top,
          easing: 'swing'
        }, 1000);
     })

	$('#click3').click(function() {
		var position = $('#whatWeDo').offset();
		$('html,body').animate({
          scrollTop: position.top,
          easing: 'swing'
        }, 1000);
     })

	$('#click4').click(function() {
		var position = $('#whereWeWork').offset();
		$('html,body').animate({
          scrollTop: position.top,
          easing: 'swing'
        }, 1000);
     })

	$('#click5').click(function() {
		var position = $('#getInvolved').offset();
		$('html,body').animate({
          scrollTop: position.top,
          easing: 'swing'
        }, 1000);
     });
	
});