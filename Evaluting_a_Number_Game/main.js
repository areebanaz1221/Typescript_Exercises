"use strict";
let guess = 7;
let target = 5;
if (guess < target) {
    console.log("Your guess is to low.");
}
else if (guess > target) {
    console.log("Your guess is to high.");
}
else {
    console.log("Your guessed correctly!");
}
