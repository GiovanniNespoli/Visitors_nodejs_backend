import "reflect-metadata";
import CreateVisitorService from "../../services/CreateVisitors.service";
import FakeVisitorsRepository from "../FakeRepositories/FakeVisitorsRepository";
import UpdateVisitorsService from "@modules/visitors/services/UpdateVisitors.service";
import IndexVisitorsService from "@modules/visitors/services/IndexVisitors.service";
import IndexVisitorsByDate from "@modules/visitors/services/IndexVisitorsByDate.service";
import IndexVisitorsByName from "@modules/visitors/services/IndexVisitorsByName.service";
import DeleteVisitorsService from "@modules/visitors/services/DeleteVisitors.service";

interface ICreateVisitorData {
  name?: string;
  email?: string;
  phone?: string;
}

export const mockCreateVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const createVisitorService = new CreateVisitorService(fakeVisitorsRepository);
  return { fakeVisitorsRepository, createVisitorService };
};

export const mockDeleteVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const deleteVisitorService = new DeleteVisitorsService(
    fakeVisitorsRepository,
  );
  return { fakeVisitorsRepository, deleteVisitorService };
};

export const mockIndexVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const indexVisitorsService = new IndexVisitorsService(fakeVisitorsRepository);
  return { fakeVisitorsRepository, indexVisitorsService };
};

export const mockIndexVisitorsByDate = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const indexVisitorsByDateService = new IndexVisitorsByDate(
    fakeVisitorsRepository,
  );
  return { fakeVisitorsRepository, indexVisitorsByDateService };
};

export const mockIndexVisitorsByName = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const indexVisitorsByNameService = new IndexVisitorsByName(
    fakeVisitorsRepository,
  );
  return { fakeVisitorsRepository, indexVisitorsByNameService };
};

export const mockUpdateVisitorService = () => {
  const fakeVisitorsRepository = new FakeVisitorsRepository();
  const updateVisitorService = new UpdateVisitorsService(
    fakeVisitorsRepository,
  );
  return { fakeVisitorsRepository, updateVisitorService };
};

export const createVisitorData = ({
  name,
  email,
  phone,
}: ICreateVisitorData) => ({
  name: name || "Giovanni",
  email: email || "gg@gmail.com",
  phone: phone || "11958681449",
});
