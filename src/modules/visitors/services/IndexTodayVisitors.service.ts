import { injectable, inject } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitor } from "../interface/IVisitor";

@injectable()
export default class IndexTodayVisitors {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}
  public async execute(): Promise<IVisitor[]> {
    return await this.visitoryRepository.GetAllVisitorsPerDay();
  }
}
