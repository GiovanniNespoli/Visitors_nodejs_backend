import { PrismaClient } from "@prisma/client";
import IVisitorsRepository from "../repository/IVisitors.repository";
import IVisitor from "../interface/IVisitor";

const prisma = new PrismaClient();

export default class VisitorPrisma implements IVisitorsRepository {
  public async GetAllVisitors(): Promise<IVisitor[]> {
    return await prisma.visitors.findMany();
  }

  public async CreateVisitor(data: IVisitor): Promise<IVisitor> {
    return await prisma.visitors.create({ data });
  }

  public async DeleteVisitor(id: number): Promise<IVisitor> {
    return await prisma.visitors.delete({
      where: {
        id,
      },
    });
  }

  public async UpdateVisitor(data: IVisitor): Promise<IVisitor> {
    return await prisma.visitors.update({
      data,
      where: {
        id: data.id,
      },
    });
  }

  public async FindVisitorById(id: number): Promise<IVisitor | null> {
    return await prisma.visitors.findFirst({
      where: {
        id,
      },
    });
  }
}
