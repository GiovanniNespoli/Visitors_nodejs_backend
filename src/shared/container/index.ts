import { container } from "tsyringe";

import "@modules/visitors/visitors.module";
import context from "@shared/container/modulesContext";

context.metadata.forEach((module) => {
  module.providers?.forEach((provider) => {
    container.registerSingleton(provider.provideAs, provider.useClass);
  });
});
