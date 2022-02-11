import func from "./utils";
import { p1, p2, p3 } from "./deps";

jest.mock("./deps");

describe("test async", () => {
  p1.mockResolvedValue("mockResultP1");
  p2.mockResolvedValue("mockResultP2");
  p3.mockResolvedValue("mockResultP3");
  it("should ", async () => {
    const result = await func();
    expect(result).toBe("Results: mockResultP1, mockResultP2, mockResultP3");
    expect(p1).toHaveBeenCalledTimes(1);
    expect(p2).toHaveBeenCalledTimes(1);
    expect(p3).toHaveBeenCalledTimes(1);
  });
});
