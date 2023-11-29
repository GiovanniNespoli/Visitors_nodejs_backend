import { injectable, inject } from "tsyringe";
import IVisitor from "../interface/IVisitor";
import IVisitorsRepository from "../repository/IVisitors.repository";

@injectable()
export default class IndexVisitorsService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}
  public async execute(): Promise<IVisitor[]> {
    return await this.visitoryRepository.GetAllVisitors();
  }
}
