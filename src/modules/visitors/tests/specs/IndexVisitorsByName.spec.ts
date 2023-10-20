import { describe, expect, it } from "vitest";
import { createVisitorData, mockIndexVisitorsByName } from "../mocks";

describe("IndexVisitorsByName", () => {
  it("Should be able to list all visitors", async () => {
    const { fakeVisitorsRepository, indexVisitorsByNameService } =
      mockIndexVisitorsByName();

    await fakeVisitorsRepository.insertNewVisitor(createVisitorData({}));
    await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({ email: "different@gmail.com" }),
    );
    await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({ email: "different2@gmail.com" }),
    );

    const index = await indexVisitorsByNameService.execute("Giovanni");

    expect(index).toHaveLength(3);
  });
});
