export function removeDuplicates(input: string): string {
  const uniques: Set<string> = new Set();

  const inputTrimmed = input.trim();
  const inputArray = inputTrimmed.split(" ");

  if (inputArray.length > 0) {
    inputArray.forEach((str) => {
      if (!uniques.has(str)) {
        uniques.add(str);
      }
    });
  }

  const uniquesOnly = [...uniques].join(" ");

  return uniquesOnly;
}
