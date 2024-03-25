"use strict";
function processUserInput(callback) {
    let name = "Areeba Ashraf!";
    callback(name);
}
processUserInput(function (name) {
    console.log("Hello, " + name);
});
