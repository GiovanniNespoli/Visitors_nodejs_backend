import { Express } from "express";

import { bodyParseMiddleware } from "./bodyParser";
import { corsMiddleware } from "./cors";
import { celebrateMiddleware } from "./celebrate";

function setupMiddlewares(app: Express): void {
  app.use(bodyParseMiddleware);
  app.use(corsMiddleware);
  app.use(celebrateMiddleware);
}

export default setupMiddlewares;
