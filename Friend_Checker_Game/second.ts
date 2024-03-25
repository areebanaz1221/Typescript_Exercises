import  from "";
let isFriend = await inquirer.prompt([{
    name: "name",
    type: "string",
    message: "Enter your friend name:"
}]);
if (isFriend.name === "Khansa" || isFriend.name === "Rabia") {
    console.log(`${isFriend.name} is your friend.`);
} else {
    console.log(`${isFriend.name} is not your friend.`);
}