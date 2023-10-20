import ICreateVisitorDTO from "../dtos/ICreateVisitorDTO";
import IUpdateVisitorDTO from "../dtos/IUpdateVisitorDTO";
import Visitor from "../infra/prisma/models/Visitors";

export default interface IVisitorsRepository {
  insertNewVisitor(data: ICreateVisitorDTO): Promise<Visitor>;
  listAllVisitors(): Promise<Visitor[]>;
  findAllVistorsByDate(nextDate: Date, earlyDate: Date): Promise<Visitor[]>;
  findVisitorByName(name: string): Promise<Visitor[]>;
  findVisitorByEmail(email: string): Promise<Visitor | undefined>;
  findVisitor(id: number): Promise<Visitor | undefined>;
  deleteVisitor(id: number): Promise<Visitor>;
  updateVisitor(data: IUpdateVisitorDTO): Promise<Visitor>;
}
