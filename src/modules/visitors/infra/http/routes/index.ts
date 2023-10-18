import { Router } from "express";
import visitorRoutes from "./visitors.routes";

const routes = Router();

routes.use("/visitors", visitorRoutes);

export default routes;
