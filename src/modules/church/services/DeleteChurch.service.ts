import { inject, injectable } from "tsyringe";
import { ApiError } from "../../../utils/api-errors";
import { IChurch } from "../interface/IChurch";
import IChurchRepository from "../repository/IChurch.repository";

@injectable()
export default class DeleteVisitorService {
  constructor(
    @inject("ChurchRepository")
    private churchRepository: IChurchRepository
  ) {}

  public async execute(id: number): Promise<IChurch> {
    const findVisitor = await this.churchRepository.FindChurchById(id);

    if (!findVisitor) {
      throw new ApiError("O Visitante não existe", 404);
    }

    return await this.churchRepository.DeleteChurch(id);
  }
}
