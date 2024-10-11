import { IChurch, ICreateChurch, IUpdateChurch } from "../interface/IChurch";

export default interface IChurchRepository {
  GetAllChurchs(): Promise<IChurch[]>;
  GetAllChurchsPerDay(): Promise<IChurch[]>;
  GetChurchPerDay(day: Date): Promise<IChurch[]>;
  CreateChurch(data: ICreateChurch): Promise<IChurch>;
  DeleteChurch(id: number): Promise<IChurch>;
  UpdateChurch(data: IUpdateChurch): Promise<IChurch>;
  FindChurchById(id: number): Promise<IChurch | null>;
}
