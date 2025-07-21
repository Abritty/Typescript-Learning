// Leetcode 2667: Create Hello World Function
function createHelloWorld() {
    return function(...args: any[]): string{
        return "Hello World";
    };
}

// Usage
const helloWorld = createHelloWorld();
console.log(helloWorld());
