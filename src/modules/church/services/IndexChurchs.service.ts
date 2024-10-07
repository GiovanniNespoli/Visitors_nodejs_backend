import { inject, injectable } from "tsyringe";
import IChurchRepository from "../repository/IChurch.repository";
import { IChurch, ICreateChurch } from "../interface/IChurch";

@injectable()
export default class IndexChurchsService {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository
  ) {}

  public async execute(): Promise<IChurch[]> {
    return await this.churchRepository.GetAllChurchs();
  }
}
