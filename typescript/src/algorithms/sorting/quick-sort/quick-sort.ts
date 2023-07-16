export function quickSort<T>(input: T[]): T[] {
  if (input.length <= 1) {
    return input;
  }

  const pivot = input[input.length - 1];

  const left = [];
  const right = [];

  for (let i = 0; i < input.length - 1; i++) {
    const item = input[i];
    if (item <= pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return [...sortedLeft, pivot, ...sortedRight];
}
