let globalVar = "Accessible everywhere";
function showExample() {
    let localVar = "Accessible only inside this function";
    console.log(globalVar); // Work
} 
console.log(globalVar); // Error: localVar is not defined