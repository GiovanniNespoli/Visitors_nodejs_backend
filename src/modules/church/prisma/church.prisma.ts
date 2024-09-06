import { PrismaClient } from "@prisma/client";
import { IChurch, ICreateChurch, IUpdateChurch } from "../interface/IChurch";
import IChurchRepository from "../repository/IChurch.repository";

const prisma = new PrismaClient();

export default class ChurchPrisma implements IChurchRepository {
  public async FindChurchById(id: number): Promise<IChurch | null> {
    return await prisma.church.findFirst({
      where: {
        id,
      },
    });
  }

  public async GetAllChurchs(): Promise<IChurch[]> {
    return await prisma.church.findMany();
  }
  public async CreateChurch({
    label,
    number,
  }: ICreateChurch): Promise<IChurch> {
    return await prisma.church.create({
      data: {
        label,
        number,
      },
    });
  }
  public async DeleteChurch(id: number): Promise<IChurch> {
    return await prisma.church.delete({
      where: {
        id,
      },
    });
  }
  public async UpdateChurch({
    id,
    label,
    number,
  }: IUpdateChurch): Promise<IChurch> {
    return await prisma.church.update({
      data: {
        label,
        number,
      },
      where: {
        id,
      },
    });
  }
}
