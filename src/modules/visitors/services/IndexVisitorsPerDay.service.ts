import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { IVisitorsPerDay } from "../interface/IVisitor";
import IChurchRepository from "../../church/repository/IChurch.repository";

@injectable()
export default class IndexVisitorsPerDay {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository,

    @inject("ChurchRepository")
    private churchRepository: IChurchRepository
  ) {}

  public async execute(day: Date): Promise<IVisitorsPerDay[]> {
    const visitors = await this.visitoryRepository.GetVistorsPerDay(day);
    const churchs = await this.churchRepository.GetChurchPerDay(day);

    return [
      {
        churchs,
        visitors,
      },
    ];
  }
}
