import { inject, injectable } from "tsyringe";
import Visitor from "../infra/prisma/models/Visitors";
import IVisitorsRepository from "../repository/IVisitorsRepository";

interface IRequestData {
  name: string;
  email: string;
  phone: string;
}

@injectable()
export default class CreateVisitorService {
  constructor(
    @inject("VisitorRepository")
    private visitor: IVisitorsRepository,
  ) {}

  public async execute({ email, name, phone }: IRequestData): Promise<Visitor> {
    const create = await this.visitor.insertNewVisitor({
      email,
      name,
      phone,
    });

    return create;
  }
}
