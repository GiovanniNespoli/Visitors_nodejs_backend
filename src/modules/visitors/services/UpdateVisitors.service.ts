import { inject, injectable } from "tsyringe";
import Visitor from "../infra/prisma/models/Visitors";
import IVisitorsRepository from "../repository/IVisitorsRepository";
import { BadRequestError } from "@shared/errors";

interface IRequestData {
  id: number;
  name?: string;
  phone?: string;
  email?: string;
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
    const visitor = await this.visitor.findVisitor(id);

    if (!visitor) {
      throw new BadRequestError("Visitante não existe");
    }

    if (email) {
      const isVisitorEmail = await this.visitor.findVisitorByEmail(email);

      if (isVisitorEmail) {
        throw new BadRequestError("Email já exisite");
      }

      visitor.email = email;
    }

    if (name) visitor.name = name;
    if (phone) visitor.phone = phone;
    visitor.updatedAt = new Date();

    const update = await this.visitor.updateVisitor(visitor);

    return update;
  }
}
