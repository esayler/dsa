import { removeDuplicates } from "./duplicate-strings";

describe("duplicate strings", () => {
  it("should remove all duplicates", () => {
    const ogString = "This is is a test test string";

    const removed = removeDuplicates(ogString);
    expect(removed).toMatch("This is a test string");
  });
});
