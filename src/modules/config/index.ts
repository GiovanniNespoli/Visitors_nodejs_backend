import { container } from "tsyringe";
import IVisitorsRepository from "../visitors/repository/IVisitors.repository";
import VisitorPrisma from "../visitors/prisma/visitors.prisma";

container.registerSingleton<IVisitorsRepository>(
  "VisitorRepository",
  VisitorPrisma
);
