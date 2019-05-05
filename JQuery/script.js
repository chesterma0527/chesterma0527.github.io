$(document).ready(function(){
	//all jqiery we are writing will go inside of this function
	console.log("the document is ready")

	$('#btn1').click(function(){
		$('p').fadeOut(2000)
	});

	$('#btn2').click(function(){
		$('p').fadeIn(2000)
	});

	$('#btn3').click(function(){
		$('h').slideUp(200)
	});

	$('#btn4').click(function(){
		$('h').slideDown(200)
	});

	$('#para').click(function(){
		$(this).hide()
	})



















})