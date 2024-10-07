import { Router } from "express";
import ChurchController from "../controllers/Church.controller";

const churchRouter = Router();
const churchController = new ChurchController();

churchRouter.get("/", churchController.Index);
churchRouter.post("/", churchController.Create);
churchRouter.put("/:id", churchController.Update);
churchRouter.delete("/:id", churchController.Delete);

export default churchRouter;
