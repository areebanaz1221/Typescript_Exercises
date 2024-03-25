"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let isFriend = await inquirer_1.default.prompt([{
        name: "name",
        type: "string",
        message: "Enter your friend name:"
    }]);
if (isFriend.name === "Khansa" || isFriend.name === "Rabia") {
    console.log(`${isFriend.name} is your friend.`);
}
else {
    console.log(`${isFriend.name} is not your friend.`);
}
