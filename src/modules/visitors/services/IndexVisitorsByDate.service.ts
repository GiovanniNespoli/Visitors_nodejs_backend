import { inject, injectable } from "tsyringe";
import Visitor from "../infra/prisma/models/Visitors";
import IVisitorsRepository from "../repository/IVisitorsRepository";
import add from "date-fns/add";

@injectable()
export default class IndexVisitorsByDate {
  constructor(
    @inject("VisitorsRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute(date: Date): Promise<Visitor[]> {
    const nextDate = add(new Date(date), {
      days: 1,
    });

    const earlyDate = add(new Date(date), {
      days: -1,
    });

    return this.visitor.findAllVistorsByDate(nextDate, earlyDate);
  }
}
