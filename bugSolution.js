function foo(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    return 'Error: Both arguments must be numbers.';
  }
}
console.log(foo(10, 20)); // Output: 30
console.log(foo(10, '20')); // Output: Error: Both arguments must be numbers.