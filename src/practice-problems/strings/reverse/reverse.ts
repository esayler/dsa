// create a function to reverse a string

export function reverse(input: string): string {
  const stack: string[] = [];

  for (const c of input) {
    stack.unshift(c);
  }

  return stack.join("");
}

export function reverseBuiltin(input: string): string {
  return input.split("").reverse().join("");
}
