import { inject, injectable } from "tsyringe";
import Visitor from "../infra/prisma/models/Visitors";
import IVisitorsRepository from "../repository/IVisitorsRepository";
import { BadRequestError } from "@shared/errors";

interface IRequestData {
  id: number;
  name: string;
  phone: string;
  email: string;
}

@injectable()
export default class UpdateVisitorsService {
  constructor(
    @inject("VisitorsRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute({
    id,
    email,
    name,
    phone,
  }: IRequestData): Promise<Visitor> {
    const isVisitorExist = await this.visitor.findVisitor(id);

    if (!isVisitorExist) {
      throw new BadRequestError("Visitante não existe");
    }

    const isVisitorEmail = await this.visitor.findVisitorByEmail(email);

    if (isVisitorEmail) {
      throw new BadRequestError("Email já exisite");
    }

    const update = await this.visitor.updateVisitor({
      id,
      email,
      name,
      phone,
      createdAt: isVisitorExist.createdAt,
      updatedAt: new Date(),
    });

    return update;
  }
}
