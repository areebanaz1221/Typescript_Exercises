"use strict";
function outerFunction() {
    const innerFunction = function () {
        console.log("Hello from inside!");
    };
    innerFunction();
}
outerFunction();
