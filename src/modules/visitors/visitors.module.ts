import Module from "@shared/decorators/Module";
import VisitorsRepository from "./infra/prisma/repository/VisitorRespository";
import visitorsRoute from "./infra/http/routes/index";

@Module({
  router: visitorsRoute,
  providers: [
    { provideAs: "VisitorsRepository", useClass: VisitorsRepository },
  ],
})
export default class ComplementsModule {}
