export function factorial(n: number): number {
  if (n < 2) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

export function factorialIterative(n: number): number {
  if (n < 2) {
    return 1;
  }
  let accumulator = n;
  for (let i = n - 1; i >= 1; i--) {
    accumulator = i * accumulator;
  }
  return accumulator;
}
