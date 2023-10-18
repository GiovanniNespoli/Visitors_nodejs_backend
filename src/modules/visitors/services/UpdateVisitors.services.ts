import { inject, injectable } from "tsyringe";
import Visitor from "../infra/prisma/models/Visitors";
import IVisitorsRepository from "../repository/IVisitorsRepository";

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
    // const isVisitorEmail = await this.visitor.findVisitorByEmail(email);

    // if (!isVisitorEmail) {
    //   throw new BadRequestError("Email não existe");
    // }

    const update = await this.visitor.updateVisitor({
      id,
      email,
      name,
      phone,
    });

    return update;
  }
}
