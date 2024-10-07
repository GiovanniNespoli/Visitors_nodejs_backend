import { Response, Request } from "express";
import { container } from "tsyringe";
import IndexChurchService from "../services/IndexChurch.service";
import CreateChurchService from "../services/CreateChurch.service";
import DeleteChurchService from "../services/DeleteChurch.service";
import UpdateChurchService from "../services/UpdateChurch.service";

export default class ChurchController {
  public async Index(request: Request, response: Response): Promise<Response> {
    const indexChurch = container.resolve(IndexChurchService);
    const index = await indexChurch.execute();

    return response.status(200).json(index);
  }

  public async Create(request: Request, response: Response): Promise<Response> {
    const { label, number } = request.body;

    const createVisitor = container.resolve(CreateChurchService);
    const create = await createVisitor.execute({
      label,
      number,
    });

    return response.status(201).json(create);
  }

  public async Delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVisitor = container.resolve(DeleteChurchService);
    const index = await deleteVisitor.execute(parseInt(id));

    return response.status(200).json(index);
  }

  public async Update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { label, number } = request.body;

    const updateVisitor = container.resolve(UpdateChurchService);
    const update = await updateVisitor.execute({
      id: parseInt(id),
      label,
      number,
    });

    return response.status(201).json(update);
  }
}
