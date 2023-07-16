// O(n^2)

export function bubbleSort<T>(inputArray: Array<T>): Array<T> {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 1; i < inputArray.length; i++) {
      if (inputArray[i] < inputArray[i - 1]) {
        const temp = inputArray[i];
        inputArray[i] = inputArray[i - 1];
        inputArray[i - 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return inputArray;
}
