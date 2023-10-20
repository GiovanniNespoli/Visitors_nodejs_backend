import CreateVisitorService from "@modules/visitors/services/CreateVisitors.service";
import DeleteVisitorsService from "@modules/visitors/services/DeleteVisitors.service";
import IndexVisitorsService from "@modules/visitors/services/IndexVisitors.service";
import IndexVisitorsByDate from "@modules/visitors/services/IndexVisitorsByDate.service";
import IndexVisitorsByName from "@modules/visitors/services/IndexVisitorsByName.service";
import UpdateVisitorsService from "@modules/visitors/services/UpdateVisitors.service";
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
    const { date } = req.params;

    const indexByDateProvider = container.resolve(IndexVisitorsByDate);

    const IndexVisitors = await indexByDateProvider.execute(new Date(date));

    return res.json(IndexVisitors);
  }

  public async indexByName(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;

    const indexByNameProvider = container.resolve(IndexVisitorsByName);

    const indexVisitors = await indexByNameProvider.execute(name);

    return res.json(indexVisitors);
  }
}
