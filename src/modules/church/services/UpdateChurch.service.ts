import { inject, injectable } from "tsyringe";
import { ApiError } from "../../../utils/api-errors";
import IChurchRepository from "../repository/IChurch.repository";
import { IChurch, IUpdateChurch } from "../interface/IChurch";

@injectable()
export default class UpdateChurchService {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository
  ) {}

  public async execute({ id, label, number }: IUpdateChurch): Promise<IChurch> {
    const findChurch = await this.churchRepository.FindChurchById(id);

    if (!findChurch) {
      throw new ApiError("Igreja não encontrada", 404);
    }

    return await this.churchRepository.UpdateChurch({
      id,
      label,
      number,
    });
  }
}
