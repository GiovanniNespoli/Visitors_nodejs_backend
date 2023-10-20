import { describe, expect, it } from "vitest";
import { createVisitorData, mockIndexVisitorsByDate } from "../mocks";

describe("IndexVisitorsByDate", () => {
  it("Should be able to list all visitors", async () => {
    const { fakeVisitorsRepository, indexVisitorsByDateService } =
      mockIndexVisitorsByDate();

    const visitor = await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({}),
    );

    visitor.createdAt = new Date();

    const index = await indexVisitorsByDateService.execute(new Date());

    expect(index).toHaveLength(1);
  });
});
