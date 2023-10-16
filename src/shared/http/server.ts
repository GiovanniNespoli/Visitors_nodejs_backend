import "reflect-metadata";
import "@shared/container/";

import { env } from "@config/env";
import logger from "@config/log";
import App from "./app";

const port = env.PORT || 3001;

new App().express.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}.`);
});
