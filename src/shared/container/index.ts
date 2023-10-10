import { container } from "tsyringe";

import VisitorRepository from "@modules/visitors/infra/prisma/repository/VisitorRespository";
import IVisitorsRepository from "@modules/visitors/repository/IVisitorsRepository";

container.registerSingleton<IVisitorsRepository>(
  "VisitorRepository",
  VisitorRepository,
);
