import { Express } from "express";
import modulesRoutes from "./modules.routes";

function setupRoutes(app: Express): void {
  app.use("/api", modulesRoutes);
}

export default setupRoutes;
