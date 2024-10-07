import { IChurch } from "../../church/interface/IChurch";

interface IVisitor {
  id: number;
  name: string;
  church: string | null;
  observation: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ICreateVisitor {
  name: string;
  church: string;
  observation: string;
}

interface IUpdateVisitor {
  id: number;
  name: string;
  church: string;
  observation: string;
}

interface IVisitorsPerDay {
  visitors: IVisitor[];
  churchs: IChurch[];
}

export { IVisitor, ICreateVisitor, IUpdateVisitor, IVisitorsPerDay };
