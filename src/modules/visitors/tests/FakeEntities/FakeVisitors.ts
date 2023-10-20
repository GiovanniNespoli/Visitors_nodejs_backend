import IVisitors from "@modules/visitors/interfaces/IVisitors";

export default class FakeVisitors implements IVisitors {
  id: number;

  name: string;

  email: string;

  phone: string;

  createdAt: Date;

  updatedAt: Date;
}
