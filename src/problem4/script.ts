// O(n) because the function calls itself n times.
function sum_to_n_iterative(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}


// O(1) - The calculation involves a constant number of arithmetic operations regardless of n.
function sum_to_n_formula(n: number): number {
    return (n * (n + 1)) / 2;
}

// O(n) because the function calls itself n times.
function sum_to_n_recursive(n: number): number {
    if (n <= 1) {
        return n;
    }
    return n + sum_to_n_recursive(n - 1);
}


//Sample
console.log(sum_to_n_iterative(10))
console.log(sum_to_n_formula(10))
console.log(sum_to_n_recursive(10))
