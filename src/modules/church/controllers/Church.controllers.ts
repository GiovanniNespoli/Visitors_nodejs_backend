import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateChurchService from "../services/CreateChurch.service";
import DeleteChurchService from "../services/DeleteChurch.service";
import UpdateChurchService from "../services/UpdateChurch.service";

export default class ChurchController {
  public async Create(request: Request, response: Response): Promise<Response> {
    const { label, number } = request.body;

    const createChurch = container.resolve(CreateChurchService);
    const create = await createChurch.execute({ label, number });

    return response.status(201).json(create);
  }

  public async Delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteChurchService = container.resolve(DeleteChurchService);
    const deleteChurch = await deleteChurchService.execute(parseInt(id, 10));

    return response.status(200).json(deleteChurch);
  }

  public async Update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { label, number } = request.body;

    const updateChurch = container.resolve(UpdateChurchService);
    const update = await updateChurch.execute({ id: parseInt(id, 10), label, number });

    return response.status(201).json(update);
  }
}
