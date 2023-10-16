import { Router } from "express";
import VisitorsControllers from "../controllers/Visitors.controller";

const visitorRoutes = Router();
const visitorsControllers = new VisitorsControllers();

visitorRoutes.get("/", visitorsControllers.index);

visitorRoutes.post("/", visitorsControllers.create);

export default visitorRoutes;
