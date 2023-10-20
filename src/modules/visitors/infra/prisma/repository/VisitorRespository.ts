import { prisma } from "@config/prisma";
import Visitor from "../models/Visitors";
import ICreateVisitorDTO from "@modules/visitors/dtos/ICreateVisitorDTO";
import IVisitorsRepository from "@modules/visitors/repository/IVisitorsRepository";
import IUpdateVisitorDTO from "@modules/visitors/dtos/IUpdateVisitorDTO";

export default class VisitorRepository implements IVisitorsRepository {
  public async insertNewVisitor({
    name,
    email,
    phone,
  }: ICreateVisitorDTO): Promise<Visitor> {
    const createVisitor = await prisma.visitors.create({
      data: { email, name, phone, createdAt: new Date() },
    });

    return createVisitor;
  }
  public async listAllVisitors(): Promise<Visitor[]> {
    return await prisma.visitors.findMany();
  }

  public async findVisitorByEmail(email: string): Promise<Visitor | undefined> {
    const findVisitorByName = await prisma.visitors.findFirst({
      where: {
        email,
      },
    });

    return findVisitorByName || undefined;
  }

  public async findAllVistorsByDate(
    nextDate: Date,
    earlyDate: Date,
  ): Promise<Visitor[]> {
    const filterVisitor = await prisma.visitors.findMany({
      where: {
        createdAt: {
          lt: nextDate,
          gt: earlyDate,
        },
      },
    });

    return filterVisitor;
  }
  public async findVisitorByName(name: string): Promise<Visitor[]> {
    const filterVisitor = await prisma.visitors.findMany({
      where: {
        name,
      },
    });

    return filterVisitor;
  }

  public async deleteVisitor(id: number): Promise<Visitor> {
    return await prisma.visitors.delete({
      where: {
        id,
      },
    });
  }
  public async updateVisitor({
    email,
    name,
    phone,
    id,
  }: IUpdateVisitorDTO): Promise<Visitor> {
    const newValues = await prisma.visitors.update({
      where: {
        id,
      },
      data: {
        email,
        name,
        phone,
      },
    });

    return newValues;
  }

  public async findVisitor(id: number): Promise<Visitor | undefined> {
    const newValues = await prisma.visitors.findFirst({
      where: {
        id,
      },
    });

    return newValues || undefined;
  }
}
