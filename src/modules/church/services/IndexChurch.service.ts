import { injectable, inject } from "tsyringe";
import IChurchRepository from "../repository/IChurch.repository";
import { IChurch } from "../interface/IChurch";

@injectable()
export default class IndexChurchService {
  constructor(
    @inject("ChurchRepository")
    private visitoryRepository: IChurchRepository
  ) {}
  public async execute(): Promise<IChurch[]> {
    return await this.visitoryRepository.GetAllChurchsPerDay();
  }
}
