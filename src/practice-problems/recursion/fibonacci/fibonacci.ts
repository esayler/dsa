export function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("index can't be less than zero!");
  } else if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

export function makeFibonacciSequence(length: number): number[] {
  const fibonacciSequence = [];
  for (let i = 0; i < length; i++) {
    fibonacciSequence.push(fibonacci(i));
  }

  return fibonacciSequence;
}
