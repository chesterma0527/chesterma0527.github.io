function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();


  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  t = setTimeout(function() {
    startTime()
  }, 500);
}
startTime();



$(document).ready(function(){

	$('#cancel').click(function(){
		$('#app2').fadeOut(500)
	});

	$('#appbtn').click(function(){
		$('#app2').fadeIn(500)
	});

})



function changePhone(){
	var getNewPhone = document.getElementById('textbox1').value;
	document.getElementById('update').innerHTML = getNewPhone;
	alert("your information has be successfully updated")
}

function changeAddress(){
	var getNewAddress = document.getElementById('textbox2').value;
	document.getElementById('update').innerHTML = getNewAddress;
	alert("your information has be successfully updated")
}

















