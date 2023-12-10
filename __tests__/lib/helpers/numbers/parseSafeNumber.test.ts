import { parseSafeNumber } from "@/lib/helpers/numbers";

describe("parseSafeNumber", () => {
  test("should return a number when given a valid string representation of a number", () => {
    expect(parseSafeNumber("123")).toBe(123);
    expect(parseSafeNumber("3.14")).toBe(3.14);
    expect(parseSafeNumber("-42")).toBe(-42);
    expect(parseSafeNumber("12.34")).toBe(12.34);
    expect(parseSafeNumber("1a2b3c")).toBe(1);
  });

  test("should return 0 when given an invalid string representation of a number", () => {
    expect(parseSafeNumber("abc")).toBe(0);
  });

  test("should return NaN when given null or undefined", () => {
    expect(parseSafeNumber(null)).toBe(0);
    expect(parseSafeNumber(undefined)).toBe(0);
  });
});
