export function insertionSort<T>(inputArray: Array<T>): Array<T> {
  // i is index start of unsorted ('right') part of the array
  for (let i = 0, l = inputArray.length; i < l; i++) {
    // console.log({ i, value: inputArray[i] });

    // j is a pointer to each index of the 'sorted' part of the array
    for (let j = 0; j < i; j++) {
      if (inputArray[i] < inputArray[j]) {
        const spliced = inputArray.splice(i, 1);
        inputArray.splice(j, 0, spliced[0]);
      }
    }
  }

  return inputArray;
}
