var nickname = prompt("Enter you nickname: ");
var height = prompt("Enter your height in inches: ");
var weight = prompt("Enter your weight in kilograms: ");
			
var feet = Math.floor(height/12);
var inches = height % 12
var newHeight =`${feet}'${inches}”`;

var weightlbs = (weight * 2.20462).toFixed(3);
alert("Name: "+nickname +"\n"+"Height: "+newHeight+"\n"+"Weight: "+weightlbs+" lbs")
		