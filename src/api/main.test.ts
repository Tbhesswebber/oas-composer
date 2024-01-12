import library from "./main";

describe("module", () => {
  it("should export the expected values", () => {
    expect(library).not.toBe(undefined);
  });
});
