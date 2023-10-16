import CreateVisitorService from "@modules/visitors/services/CreateVisitors.services";
import IndexVisitorsService from "@modules/visitors/services/IndexVisitors.service";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class VisitorsControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    const indexVisitorsService = container.resolve(IndexVisitorsService);

    const visitor = await indexVisitorsService.execute();

    return res.json(visitor);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { email, name, phone } = req.body;

    const createVisitorService = container.resolve(CreateVisitorService);

    const newVisitor = await createVisitorService.execute({
      email,
      name,
      phone,
    });

    return res.json(newVisitor);
  }
}
