import { inject, injectable } from "tsyringe";
import Visitor from "../infra/prisma/models/Visitors";
import IVisitorsRepository from "../repository/IVisitorsRepository";
import { BadRequestError } from "@shared/errors";

interface IRequestData {
  name: string;
  email: string;
  phone: string;
}

@injectable()
export default class CreateVisitorService {
  constructor(
    @inject("VisitorsRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute({ email, name, phone }: IRequestData): Promise<Visitor> {
    const isVisitorEmail = await this.visitor.findVisitorByEmail(email);

    if (isVisitorEmail) {
      throw new BadRequestError("Email já existe");
    }

    const create = await this.visitor.insertNewVisitor({
      email,
      name,
      phone,
    });

    return create;
  }
}
