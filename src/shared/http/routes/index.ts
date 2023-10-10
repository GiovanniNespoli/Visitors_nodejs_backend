import visitorRoutes from "@modules/visitors/infra/http/routes/visitors.routes";
import { Router } from "express";

const routes = Router();

routes.use("/", visitorRoutes);

export default routes;
