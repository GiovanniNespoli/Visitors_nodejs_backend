import { container } from "tsyringe";
import IVisitorsRepository from "../modules/visitors/repository/IVisitors.repository";
import VisitorPrisma from "../modules/visitors/prisma/visitors.prisma";
import IChurchRepository from "../modules/church/repository/IChurch.repository";
import ChurchPrisma from "../modules/church/prisma/church.prisma";

container.registerSingleton<IVisitorsRepository>(
  "VisitorRepository",
  VisitorPrisma
);

container.registerSingleton<IChurchRepository>(
  "ChurchRepository",
  ChurchPrisma
);
