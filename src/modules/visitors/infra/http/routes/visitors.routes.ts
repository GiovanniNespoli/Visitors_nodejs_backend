import { Router } from "express";
import VisitorsControllers from "../controllers/Visitors.controller";

const visitorRoutes = Router();
const visitorsControllers = new VisitorsControllers();

visitorRoutes.get("/", visitorsControllers.index);

export default visitorRoutes;
