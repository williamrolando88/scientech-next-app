import { pathCreator } from "@/lib/helpers/pathCreator";

describe("pathCreator", () => {
  test("should return the root when no sublinks are provided", () => {
    const root = "/root";
    expect(pathCreator(root)).toBe(root);
  });

  test("should concatenate root and one sublink correctly", () => {
    const root = "/root";
    const sublink = "/sublink";
    expect(pathCreator(root, sublink)).toBe("/root/sublink");
  });

  test("should concatenate root and multiple sublinks correctly", () => {
    const root = "/root";
    const sublinks = ["/sublink1", "/sublink2", "/sublink3"];
    expect(pathCreator(root, ...sublinks)).toBe("/root/sublink1/sublink2/sublink3");
  });

  test("should handle empty sublinks correctly", () => {
    const root = "/root";
    const sublinks = ["", "", ""];
    expect(pathCreator(root, ...sublinks)).toBe("/root");
  });
});
