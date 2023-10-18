import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitorsRepository";
import Visitor from "../infra/prisma/models/Visitors";

@injectable()
export default class DeleteVisitorsService {
  constructor(
    @inject("VisitorsRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute(id: number): Promise<Visitor> {
    return this.visitor.deleteVisitor(id);
  }
}
