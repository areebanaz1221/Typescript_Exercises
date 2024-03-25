function processUserInput(callback: (name: string) => void) {
    let name = "Areeba Ashraf!";
    callback(name);
}
processUserInput(function(name:string) {
    console.log("Hello, " + name);
});