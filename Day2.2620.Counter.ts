function createCounter(n: number): () => number {
    return function() {
        return n++;
    }
}

// It returns the current value of 'n' *before* it's incremented.
// - First call: returns the initial 'n', then increments it.
// - Second call: returns the new 'n' (initial n + 1), then increments it.


// Test Cases
const counter1 = createCounter(10);
console.log(counter1()); // Output: 10
console.log(counter1()); // Output: 11
console.log(counter1()); // Output: 12

const counter2 = createCounter(-2);
console.log(counter2()); // Output: -5
console.log(counter2()); // Output: -4
console.log(counter2()); // Output: -3