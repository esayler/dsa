import { mergeSort, merge } from "./merge-sort";
describe("merge sort", () => {
  it("should sort an unsorted array of numbers", () => {
    const unsortedArray = [4, 1, 10, 8, 2, 3, 7, 6, 5, 9];

    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should sort an reverse sorted array of numbers", () => {
    const unsortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should sort an sorted array of numbers", () => {
    const unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should sort an odd number of numbers", () => {
    const unsortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("should sort an array of two numbers", () => {
    const unsortedArray = [8, 6];

    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([6, 8]);
  });

  it("should sort an array of length one", () => {
    const unsortedArray = [8];

    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([8]);
  });
});

describe("merge", () => {
  it("should combine two sorted lists of equivalent length into one unified sorted list", () => {
    const sortedListOne = [1, 3, 5, 8, 10];
    const sortedListTwo = [2, 4, 6, 7, 9];

    const unified = merge(sortedListOne, sortedListTwo);
    expect(unified).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should combine two lists of different lengths into one unified sorted list", () => {
    const sortedListOne = [1, 8, 10];
    const sortedListTwo = [2, 4, 6, 7, 9];

    const unified = merge(sortedListOne, sortedListTwo);
    expect(unified).toEqual([1, 2, 4, 6, 7, 8, 9, 10]);
  });

  it("should combine two sorted lists of different lengths into one unified sorted list", () => {
    const sortedListOne = [1, 8, 10];
    const sortedListTwo = [2, 4, 6, 7, 9];

    const unified = merge(sortedListOne, sortedListTwo);
    expect(unified).toEqual([1, 2, 4, 6, 7, 8, 9, 10]);
  });

  it("should combine two sorted lists of different lengths into one unified sorted list", () => {
    const sortedListOne = [1, 3, 5, 8, 10];
    const sortedListTwo = [4, 6, 9];

    const unified = merge(sortedListOne, sortedListTwo);
    expect(unified).toEqual([1, 3, 4, 5, 6, 8, 9, 10]);
  });
});
