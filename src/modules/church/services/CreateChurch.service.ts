import { inject, injectable } from "tsyringe";
import IChurchRepository from "../repository/IChurch.repository";
import { IChurch, ICreateChurch } from "../interface/IChurch";

@injectable()
export default class CreateChurchService {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository
  ) {}

  public async execute({ label, number }: ICreateChurch): Promise<IChurch> {
    return await this.churchRepository.CreateChurch({
      label,
      number,
    });
  }
}
