import { describe, expect, it } from "vitest";
import { createVisitorData, mockIndexVisitorService } from "../mocks";

describe("IndexVisitors", () => {
  it("Should be able to list all visitors", async () => {
    const { fakeVisitorsRepository, indexVisitorsService } =
      mockIndexVisitorService();

    await fakeVisitorsRepository.insertNewVisitor(createVisitorData({}));
    await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({ email: "different@gmail.com" }),
    );
    await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({ email: "different2@gmail.com" }),
    );

    const index = await indexVisitorsService.execute();

    expect(index).toHaveLength(3);
  });
});
