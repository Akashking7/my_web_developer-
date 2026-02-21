var name = prompt("what is your name");
var firstname = name.slice(0,1);
var secondname =name.slice(1,name.length);
var secondnamelow = secondname.toLowerCase();
var captal = firstname.toUpperCase();
var join = captal + secondnamelow;
alert("hello "+ join);

//making first word captal other smaller