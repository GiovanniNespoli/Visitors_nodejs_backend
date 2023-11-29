import IVisitor from "../interface/IVisitor";

export default interface IVisitorsRepository {
  GetAllVisitors(): Promise<IVisitor[]>;
  CreateVisitor(data: IVisitor): Promise<IVisitor>;
  DeleteVisitor(id: number): Promise<IVisitor>;
  UpdateVisitor(data: IVisitor): Promise<IVisitor>;
  FindVisitorById(id: number): Promise<IVisitor | null>;
}
