import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitorsRepository";
import { Visitors } from "@prisma/client";

@injectable()
export default class IndexVisitorsByName {
  constructor(
    @inject("VisitorsRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute(name: string): Promise<Visitors[]> {
    return await this.visitor.findVisitorByName(name);
  }
}
