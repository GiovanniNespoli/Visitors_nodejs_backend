import { Response, Request } from "express";
import { container } from "tsyringe";
import IndexVisitorsService from "../services/IndexVisitors.service";

export default class VisitorsController {
  public async Index(request: Request, response: Response): Promise<Response> {
    const indexVisitor = container.resolve(IndexVisitorsService);
    const index = await indexVisitor.execute();

    return response.status(200).json(index);
  }
}
