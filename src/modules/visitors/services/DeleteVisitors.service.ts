import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitorsRepository";
import Visitor from "../infra/prisma/models/Visitors";
import { BadRequestError } from "@shared/errors";

@injectable()
export default class DeleteVisitorsService {
  constructor(
    @inject("VisitorsRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute(id: number): Promise<Visitor | undefined> {
    const findVisitorById = await this.visitor.findVisitor(id);

    if (!findVisitorById) {
      throw new BadRequestError("Id não existe");
    }

    return this.visitor.deleteVisitor(id);
  }
}
