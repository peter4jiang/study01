$(function() {
	// $('#btn').click(function() {
	// 	$('p').hide('slow', function() {
	// 		alert('hello')
	// 	});
		
	// });

	var bPress = false
	$('#btn').click(function() {
		if (!bPress) {
			bPress = true
			$(this).text('stop')
			$('#mypanel').animate({
				height: '+=100'
			}, 5000)
		} else {
			bPress = false
			$(this).text('start')
			$('#mypanel').stop(true, false)
		}
		
	})
});