import inquirer from "inquirer";
let input1 = await inquirer.prompt([{
        name: "userAnswer",
        type: "string",
        message: "What is the capital of France?"
    }
]);
function quiz(question, correctAnswer) {
    if (input1.userAnswer.toLowerCase() === correctAnswer.toLocaleLowerCase()) {
        console.log("Correct!");
    }
    else {
        console.log("Wrong answer. Try again.");
    }
}
quiz("What is the capital of France?", "Paris");
