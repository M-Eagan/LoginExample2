//Exercsie 1
var numGame = Number(prompt("Enter a number!"));

var output = 0;
var i= 0;
for (i = 0; i <= numGame; i++) {
  output += i;
}

console.log(output);

//Exercise 2
var wantToPlay = prompt("Do you want to play?");

var playerResponseLog = "";

do {
  var playerResponse = prompt("Enter a word.");
  playerResponseLog = playerResponseLog + " " + playerResponse;
  var wantToPlay = prompt("Do you want to play?");
} while (wantToPlay == "yes");

console.log(playerResponseLog);

//Exercise 3
var printName = prompt("Would you like to print your name?");
var nameLog = "";

if (printName == "yes") {
  var name = prompt("What is your name?");
  var nameLog = "Hello, my name is " + name;
} else {
    console.log("Goodbye!");
}

console.log(nameLog);

while (printName == "yes") {
  nameLog = nameLog + "!";
  printName = prompt("Would you like to print your name?");
  console.log(nameLog);
}

//Exercise 4
var time = prompt("What time of day is it?");

if (time == "morning") {
  console.log("Since it is morning you should be eating breakfast. We suggest eggs and toast.");
} else if (time == "noon") {
  console.log("Since it is daytime you should be eating lunch.  We suggest a salad.");
} else if (time == "evening"){
  console.log("Since it is evening you should be eating dinner.  We suggest chicken and rice.");
} else {
  console.log("I'm sorry I don't understand- could you enter morning, noon or evening?");
}
