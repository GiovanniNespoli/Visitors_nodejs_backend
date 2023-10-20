import ICreateVisitorDTO from "@modules/visitors/dtos/ICreateVisitorDTO";
import IUpdateVisitorDTO from "@modules/visitors/dtos/IUpdateVisitorDTO";
import Visitor from "@modules/visitors/infra/prisma/models/Visitors";
import IVisitors from "@modules/visitors/interfaces/IVisitors";
import IVisitorsRepository from "@modules/visitors/repository/IVisitorsRepository";

export default class FakeVisitorsRepository implements IVisitorsRepository {
  private visitors: IVisitors[] = [];

  public async insertNewVisitor(data: ICreateVisitorDTO): Promise<Visitor> {
    const newVisitor = new Visitor();

    Object.assign(newVisitor, { id: Math.random(), ...data });

    this.visitors.push(newVisitor);

    return newVisitor;
  }

  public async listAllVisitors(): Promise<Visitor[]> {
    return this.visitors;
  }

  public async findAllVistorsByDate(
    nextDate: Date,
    earlyDate: Date,
  ): Promise<Visitor[]> {
    return this.visitors.filter(
      (visitor) =>
        visitor.createdAt > earlyDate && visitor.createdAt < nextDate,
    );
  }

  public async findVisitorByName(name: string): Promise<Visitor[]> {
    return this.visitors.filter((visitor) => visitor.name === name);
  }

  public async findVisitorByEmail(email: string): Promise<Visitor | undefined> {
    return this.visitors.find((visitor) => visitor.email === email);
  }

  public async findVisitor(id: number): Promise<Visitor | undefined> {
    return this.visitors.find((visitor) => visitor.id === id);
  }

  public async deleteVisitor(id: number): Promise<Visitor | undefined> {
    const findVisitor = this.visitors.find((visitor) => visitor.id === id);

    if (findVisitor) this.visitors.splice(findVisitor?.id, 1);

    return findVisitor;
  }

  public async updateVisitor(data: IUpdateVisitorDTO): Promise<Visitor> {
    const findVisitor = this.visitors.findIndex(
      (visitor) => visitor.id === data.id,
    );

    this.visitors[findVisitor] = data;

    return data;
  }
}
