import { injectable, inject } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitorsPerDay } from "../interface/IVisitor";
import IChurchRepository from "../../church/repository/IChurch.repository";

@injectable()
export default class IndexVisitorsService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository,

    @inject("ChurchRepository")
    private churchRepository: IChurchRepository
  ) {}
  public async execute(): Promise<IVisitorsPerDay[]> {
    const visitors = await this.visitoryRepository.GetAllVisitors();
    const churchs = await this.churchRepository.GetAllChurchs();

    return [
      {
        visitors,
        churchs,
      },
    ];
  }
}
