import { injectable, inject } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitor, IVisitorsPerDay } from "../interface/IVisitor";
import IChurchRepository from "../../church/repository/IChurch.repository";

@injectable()
export default class IndexTodayVisitors {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository,

    @inject("ChurchRepository")
    private churchRepository: IChurchRepository
  ) {}
  public async execute(): Promise<IVisitorsPerDay[]> {
    const visitors = await this.visitoryRepository.GetAllVisitorsPerDay();
    const churchs = await this.churchRepository.GetAllChurchsPerDay();

    return [
      {
        visitors,
        churchs,
      },
    ];
  }
}
