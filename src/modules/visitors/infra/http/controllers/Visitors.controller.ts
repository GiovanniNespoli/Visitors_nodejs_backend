import CreateVisitorService from "@modules/visitors/services/CreateVisitors.services";
import DeleteVisitorsService from "@modules/visitors/services/DeleteVisitors.services";
import IndexVisitorsService from "@modules/visitors/services/IndexVisitors.service";
import IndexVisitorsByDate from "@modules/visitors/services/IndexVisitorsByDate.services";
import UpdateVisitorsService from "@modules/visitors/services/UpdateVisitors.services";
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

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteVisitorProvider = container.resolve(DeleteVisitorsService);

    const removeVisitor = await deleteVisitorProvider.execute(parseInt(id));

    return res.json(removeVisitor);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { email, phone, name } = req.body;

    const updateVisitorProvider = container.resolve(UpdateVisitorsService);

    const removeVisitor = await updateVisitorProvider.execute({
      id: parseInt(id),
      email,
      name,
      phone,
    });

    return res.json(removeVisitor);
  }

  public async indexByDate(req: Request, res: Response): Promise<Response> {
    const { date } = req.body;

    const indexByDateProvider = container.resolve(IndexVisitorsByDate);

    const IndexVisitors = await indexByDateProvider.execute(date);

    return res.json(IndexVisitors);
  }
}
