import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitor } from "../interface/IVisitor";

@injectable()
export default class IndexVisitorsPerDay {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}

  public async execute(day: Date): Promise<IVisitor[]> {
    return await this.visitoryRepository.GetVistorsPerDay(day);
  }
}
