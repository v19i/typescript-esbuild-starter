import { should } from "chai";
should();

import { sumTwo } from "./index";

describe("Testing framework check", () => {
  it("Should import and execute the code", () => {
    sumTwo(1, 2).should.equal(3);
  })
});