import { Router } from "express";
import VisitorsController from "../controllers/Visitors.controllers";

const visitorRouter = Router();
const visitorsController = new VisitorsController();

visitorRouter.get("/", visitorsController.Index);

export default visitorRouter;
