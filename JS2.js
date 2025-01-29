var firstname = prompt("Enter you first name: ");
var lastname = prompt("Enter your last name: ");
var birthyear = prompt("Enter your birthyear: ");
var currentyear = new Date().getFullYear();
var age = currentyear - parseInt(birthyear);
			
document.getElementById("output").innerText = `Hello ${firstname} ${lastname}! How does it feel to be ${age} years old?`;