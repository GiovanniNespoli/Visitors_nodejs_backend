import { describe, expect, it } from "vitest";
import { mockCreateVisitorService, createVisitorData } from "../mocks";
import { BadRequestError } from "@shared/errors";

describe("CreateVisitor", () => {
  it("Should be able to create a visitor", async () => {
    const { createVisitorService } = mockCreateVisitorService();

    const visitor = await createVisitorService.execute(createVisitorData({}));

    expect(visitor).toHaveProperty("id");
  });

  it("Should not be able to create a visitor with an existing email", async () => {
    const { createVisitorService, fakeVisitorsRepository } =
      mockCreateVisitorService();

    await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({ email: "ggnespoli@gmail.com" }),
    );

    await createVisitorService.execute(createVisitorData({}));

    await expect(
      createVisitorService.execute(
        createVisitorData({
          email: "ggnespoli@gmail.com",
        }),
      ),
    ).rejects.toBeInstanceOf(BadRequestError);
  });
});
