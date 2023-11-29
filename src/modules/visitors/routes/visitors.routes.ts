import { Router } from "express";
import VisitorsController from "../controllers/Visitors.controllers";

const visitorRouter = Router();
const visitorsController = new VisitorsController();

visitorRouter.get("/", visitorsController.Index);
visitorRouter.get("/perDay", visitorsController.IndexPerDay);
visitorRouter.post("/", visitorsController.Create);
visitorRouter.delete("/:id", visitorsController.Delete);
visitorRouter.put("/:id", visitorsController.Update);

export default visitorRouter;
