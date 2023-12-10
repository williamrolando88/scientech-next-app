import localStorageAvailable from "@/lib/helpers/localStorageAvailable";

describe("localStorageAvailable", () => {
  beforeEach(() => {
    // Clear localStorage before each test
    window.localStorage.clear();
  });

  it("should return true when localStorage is available", () => {
    expect(localStorageAvailable()).toBe(true);
  });

  it("should return false when localStorage is not available", () => {
    const setItemMock = jest.spyOn(window.localStorage, "setItem");
    setItemMock.mockImplementation(() => {
      throw new Error("localStorage is not available");
    });

    expect(localStorageAvailable()).toBe(false);

    setItemMock.mockRestore();
  });
});
