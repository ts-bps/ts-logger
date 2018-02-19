import { getLogger } from "../src/main";

describe("getLogger", () => {
  test("exports", () => {
    expect(getLogger()).toMatchSnapshot();
  });
  test("works with strings", () => {
    const mockLog = jest.fn();
    const log = getLogger({ log: mockLog });
    log.success("success");
    log.info("info");
    log.error("info");
    expect(mockLog.mock.calls).toMatchSnapshot();
  });
  test("works with objects", () => {
    const mockLog = jest.fn();
    const log = getLogger({ log: mockLog });
    log.success({ t: "success" });
    log.info({ t: "info" });
    log.error({ t: "info" });
    expect(mockLog.mock.calls).toMatchSnapshot();
  });
});
