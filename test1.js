/* comment */
/* test.js : run this program with `node test.js` */

var name = "philip";
var age = 32;

console.log("My name is " + name);
console.log("My age is " + age);

var alarm = 730;
var time = 720;

while (time < alarm) {
	console.log("It's not time to wake up yet " + time);
	time = time + 1;
}

console.log("Better wake up! The time is now " + time);