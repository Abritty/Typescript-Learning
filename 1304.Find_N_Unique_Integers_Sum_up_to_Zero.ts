function sumZero(n: number): number[] {
    const res: number[] = []; 

    if (n % 2 === 1) {
       res.push(0);
       n -= 1; // reduce n to an even count to add symmetric pairs
    }

    for (let i: number = 1; i<=n/2; i++) {
         res.push(i, -i);
    }
  
    return res;
};

console.log(sumZero(5)); // Output: [-2, -1, 0, 1, 2]
console.log(sumZero(0));
console.log(sumZero(2));
console.log(sumZero(1));
