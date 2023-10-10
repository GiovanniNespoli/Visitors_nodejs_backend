import { inject, injectable } from "tsyringe";
import Visitor from "../infra/prisma/models/Visitors";
import IVisitorsRepository from "../repository/IVisitorsRepository";

@injectable()
export default class IndexVisitorsService {
  constructor(
    @inject("VisitorRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute(): Promise<Visitor[]> {
    return this.visitor.listAllVisitors();
  }
}
