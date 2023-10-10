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
      data: { email, name, phone },
    });

    return createVisitor;
  }
  public async listAllVisitors(): Promise<Visitor[]> {
    return await prisma.visitors.findMany();
  }

  public async findAllVistorsByDate(date: Date): Promise<Visitor[]> {
    const filterVisitor = await prisma.visitors.findMany({
      where: {
        createdAt: date,
      },
    });

    return filterVisitor;
  }
  public async findVisitor(name: string): Promise<Visitor[]> {
    const filterVisitor = await prisma.visitors.findMany({
      where: {
        createdAt: name,
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
}
