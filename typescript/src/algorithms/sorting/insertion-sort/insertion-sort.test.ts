import { insertionSort } from "./insertion-sort";
describe("insertion sort", () => {
  it("should sort an array of things", () => {
    const unsortedArray = [4, 1, 10, 8, 2, 3, 7, 6, 5, 9];

    const sortedArray = insertionSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
