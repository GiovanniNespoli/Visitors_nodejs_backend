import { inject, injectable } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";
import { ICreateVisitor, IVisitor } from "../interface/IVisitor";

@injectable()
export default class CreateVisitorService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}

  public async execute({
    name,
    church,
    observation,
  }: ICreateVisitor): Promise<IVisitor> {
    return await this.visitoryRepository.CreateVisitor({
      name,
      church,
      observation,
    });
  }
}
