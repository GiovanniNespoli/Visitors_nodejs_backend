import CreateVisitorService from "@modules/visitors/services/CreateVisitors.service";
import FakeVisitorsRepository from "../FakeRepositories/FakeVisitorsRepository";
import UpdateVisitorsService from "@modules/visitors/services/UpdateVisitors.service";
import IndexVisitorsService from "@modules/visitors/services/IndexVisitors.service";

interface ICreateVisitorData {
  name: string;
  email: string;
  phone: string;
}

export const mockCreateVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const createVisitorService = new CreateVisitorService(fakeVisitorsRepository);
  return { fakeVisitorsRepository, createVisitorService };
};

export const mockUpdateVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const updateVisitorService = new UpdateVisitorsService(
    fakeVisitorsRepository,
  );
  return { fakeVisitorsRepository, updateVisitorService };
};

export const mockIndexVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const indexVisitorService = new IndexVisitorsService(fakeVisitorsRepository);
  return { fakeVisitorsRepository, indexVisitorService };
};
export const mockCreateVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const createVisitorService = new CreateVisitorService(fakeVisitorsRepository);
  return { fakeVisitorsRepository, createVisitorService };
};
export const mockCreateVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const createVisitorService = new CreateVisitorService(fakeVisitorsRepository);
  return { fakeVisitorsRepository, createVisitorService };
};
export const mockCreateVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const createVisitorService = new CreateVisitorService(fakeVisitorsRepository);
  return { fakeVisitorsRepository, createVisitorService };
};
