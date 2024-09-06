import { container } from "tsyringe";
import IVisitorsRepository from "../modules/visitors/repository/IVisitors.repository";
import VisitorPrisma from "../modules/visitors/prisma/visitors.prisma";

container.registerSingleton<IVisitorsRepository>(
  "VisitorRepository",
  VisitorPrisma
);
