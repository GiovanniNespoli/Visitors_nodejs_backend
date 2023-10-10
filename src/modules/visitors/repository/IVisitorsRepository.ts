import ICreateVisitorDTO from "../dtos/ICreateVisitorDTO";
import IUpdateVisitorDTO from "../dtos/IUpdateVisitorDTO";
import Visitor from "../infra/prisma/models/Visitors";

export default interface IVisitorsRepository {
  insertNewVisitor(data: ICreateVisitorDTO): Promise<Visitor>;
  listAllVisitors(): Promise<Visitor[]>;
  findAllVistorsByDate(date: Date): Promise<Visitor[]>;
  findVisitor(name: string): Promise<Visitor[]>;
  deleteVisitor(id: number): Promise<Visitor>;
  updateVisitor(data: IUpdateVisitorDTO): Promise<Visitor>;
}
