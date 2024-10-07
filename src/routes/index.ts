import { Router } from "express";
import visitorRouter from "../modules/visitors/routes/visitors.routes";
import churchRouter from "../modules/church/routes/church.routes";

const routes = Router();

routes.use("/api/visitors", visitorRouter);
routes.use("/api/church", churchRouter);

export default routes;
