import { inject, injectable } from "tsyringe";
import { ApiError } from "../../../utils/api-errors";
import IChurchRepository from "../repository/IChurch.repository";
import { IChurch, IUpdateChurch } from "../interface/IChurch";

@injectable()
export default class UpdateChurchService {
  constructor(
    @inject("ChurchRepository")
    private visitoryRepository: IChurchRepository
  ) {}

  public async execute({ id, label, number }: IUpdateChurch): Promise<IChurch> {
    const findVisitor = await this.visitoryRepository.FindChurchById(id);

    if (!findVisitor) {
      throw new ApiError("O Visitante não existe", 404);
    }

    return await this.visitoryRepository.UpdateChurch({
      id,
      label,
      number,
    });
  }
}
