export function mergeSort<T>(array: Array<T>): Array<T> {
  if (array.length === 1) {
    return array;
  }
  const midIndex = Math.floor(array.length / 2);

  const firstHalf = mergeSort(array.slice(0, midIndex));
  const secondHalf = mergeSort(array.slice(midIndex, array.length));

  return merge(firstHalf, secondHalf);
}

// -- stitch function -- //
export function merge<T>(first: Array<T>, second: Array<T>): Array<T> {
  const unifiedArray = [];

  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < first.length || pointerTwo < second.length) {
    if (
      pointerTwo === second.length ||
      first[pointerOne] < second[pointerTwo]
    ) {
      unifiedArray.push(first[pointerOne]);
      pointerOne++;
    } else if (
      pointerOne === first.length ||
      second[pointerTwo] <= first[pointerOne]
    ) {
      unifiedArray.push(second[pointerTwo]);
      pointerTwo++;
    }
  }

  return unifiedArray;
}

export function stitch<T>(left: T[], right: T[]): T[] {
  let unified: T[] = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      unified.push(left.shift()!);
    } else {
      unified.push(right.shift()!);
    }
  }

  if (left.length) {
    unified = unified.concat(left);
  } else {
    unified = unified.concat(right);
  }

  return unified;
}
