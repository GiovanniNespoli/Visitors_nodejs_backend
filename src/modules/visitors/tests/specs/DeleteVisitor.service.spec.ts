import { describe, expect, it } from "vitest";
import { mockDeleteVisitorService, createVisitorData } from "../mocks";
import { BadRequestError } from "@shared/errors";

describe("DeleteVisitor", () => {
  it("Should be able to delete a visitor", async () => {
    const { fakeVisitorsRepository, deleteVisitorService } =
      mockDeleteVisitorService();

    const visitor = await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({}),
    );

    expect(await deleteVisitorService.execute(visitor.id));
  });

  it("Should not be able to delete a visitor with a non-existing visitor", async () => {
    const { deleteVisitorService } = mockDeleteVisitorService();

    await expect(deleteVisitorService.execute(10)).rejects.toBeInstanceOf(
      BadRequestError,
    );
  });
});
