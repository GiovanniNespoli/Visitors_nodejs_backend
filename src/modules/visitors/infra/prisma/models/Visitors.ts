import IVisitors from "../../../interfaces/IVisitors";

export default class Visitor implements IVisitors {
  id: number;

  name: string;

  email: string;

  phone: string;

  createdAt: Date;

  updatedAt: Date;
}
