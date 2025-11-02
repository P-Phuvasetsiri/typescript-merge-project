import { merge } from "../src/merge";

describe("merge()", () => {
  it("should merge three sorted arrays into one ascending array", () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [10, 9, 8, 7];
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should handle empty arrays", () => {
    const c1: number[] = [];
    const c2 = [1, 2];
    const c3 = [5, 4];
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 4, 5]);
  });

  it("should handle all descending in collection_3 only", () => {
    const c1: number[] = [];
    const c2: number[] = [];
    const c3 = [5, 4, 3, 2, 1];
    const result = merge(c1, c2, c3);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
