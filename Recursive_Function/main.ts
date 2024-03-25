function countdown(number: number): void {
    if (number <= 0) {
        console.log("Done!");
        return;
    }
    console.log(number);
    countdown(number - 1);
}
countdown(5);