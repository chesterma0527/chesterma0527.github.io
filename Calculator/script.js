function squareNumber(){
	var squareNum = document.getElementById('square-input').value;
	document.getElementById('solution1').innerHTML = (squareNum * squareNum);
	document.getElementById('input1').innerHTML = squareNum;

}

function halfNumber(){
	var halfNum = document.getElementById('half-input').value;
	document.getElementById('solution2').innerHTML = (halfNum/2);
	document.getElementById('input2').innerHTML = halfNum;
}

function percentOf(){
	var fractionNum = document.getElementById('percent1-input').value;
	var wholeNum = document.getElementById('percent2-input').value;
	document.getElementById('solution3-4').innerHTML = (fractionNum/wholeNum)*100 + "%";
	document.getElementById('input3').innerHTML = fractionNum;
	document.getElementById('input4').innerHTML = wholeNum;
}

function areaOfCircle(){
	var raduisNum = document.getElementById('area-input').value;
	document.getElementById('solution5').innerHTML = (3.141592653589753*raduisNum*raduisNum);
	document.getElementById('input5').innerHTML = raduisNum;
}