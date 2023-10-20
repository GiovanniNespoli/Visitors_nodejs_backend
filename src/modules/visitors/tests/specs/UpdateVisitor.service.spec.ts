import { describe, expect, it } from "vitest";
import { createVisitorData, mockUpdateVisitorService } from "../mocks";
import { BadRequestError } from "@shared/errors";

describe("UpdateVisitor", () => {
  it("Should be able to update a visitor", async () => {
    const { fakeVisitorsRepository, updateVisitorService } =
      mockUpdateVisitorService();

    const visitor = await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({}),
    );

    const updateVisitor = await updateVisitorService.execute({
      id: visitor.id,
      name: "Nespoli",
      email: "gigizinho@gmail.com",
      phone: "119967015678",
    });

    expect(updateVisitor.name).toEqual("Nespoli");
    expect(updateVisitor.email).toEqual("gigizinho@gmail.com");
    expect(updateVisitor.phone).toEqual("119967015678");
  });

  it("Should not be able to update a visitor with a non-existing visitor", async () => {
    const { updateVisitorService } = mockUpdateVisitorService();

    await expect(
      updateVisitorService.execute({
        id: 0,
        name: "Nespoli",
        email: "gigizinho@gmail.com",
        phone: "119967015678",
      }),
    ).rejects.toBeInstanceOf(BadRequestError);
  });

  it("Should not be able to update a visitor with a existing email", async () => {
    const { fakeVisitorsRepository, updateVisitorService } =
      mockUpdateVisitorService();

    const visitor = await fakeVisitorsRepository.insertNewVisitor(
      createVisitorData({}),
    );

    await expect(
      updateVisitorService.execute({
        id: visitor.id,
        name: "Nespoli",
        email: visitor.email,
        phone: "119967015678",
      }),
    ).rejects.toBeInstanceOf(BadRequestError);
  });
});
