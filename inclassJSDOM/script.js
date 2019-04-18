
function calculator1(){
	var paragraph1 = document.getElementsByTagName('p').length;
	console.log(paragraph1);
	alert("There are " + paragraph1 + " paragraphs tags on this page");

};

function firstID() {
	var calcID_ele = document.getElementById('one');
	var num = calcID_ele.getElementsByTagName('p').length;
	console.log(num);
	alert("There are " + num + " paragraphs inside this div");

	// document.getElementById('').innnerHTML = calcID_ele;
}

function secondID() {
	var calcID_ele2 = document.getElementById('two');
	var num2 = calcID_ele2.getElementsByTagName('p').length;
	alert("There are " + num2 + " paragraphs inside this div");

	// document.getElementById('').innnerHTML = calcID_ele;
}
