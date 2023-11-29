import { injectable, inject } from "tsyringe";
import IVisitorsRepository from "../repository/IVisitors.repository";

interface IData {
  data: string;
  value: number;
}

const data: IData[] = [
  { data: "2023-01-15", value: 100 },
  { data: "2023-01-22", value: 150 },
  { data: "2023-01-22", value: 150 },
  { data: "2023-01-22", value: 150 },
  { data: "2023-02-10", value: 120 },
  { data: "2023-02-10", value: 120 },
  { data: "2023-03-10", value: 120 },
  { data: "2023-03-10", value: 120 },
  { data: "2023-04-10", value: 120 },
  { data: "2023-04-10", value: 120 },
  { data: "2023-05-10", value: 120 },
  { data: "2023-05-10", value: 120 },
  { data: "2023-06-10", value: 120 },
  { data: "2023-06-10", value: 120 },
  { data: "2023-07-10", value: 120 },
  { data: "2023-07-10", value: 120 },
  { data: "2023-08-10", value: 120 },
  { data: "2023-08-10", value: 120 },
  { data: "2023-09-10", value: 120 },
  { data: "2023-09-10", value: 120 },
  { data: "2023-10-10", value: 120 },
  { data: "2023-10-10", value: 120 },
  { data: "2023-11-10", value: 120 },
  { data: "2023-11-10", value: 120 },
  { data: "2023-12-10", value: 120 },
  { data: "2023-12-10", value: 120 },
];

@injectable()
export default class IndexVisitorsPerMonthService {
  constructor(
    @inject("VisitorRepository")
    private visitoryRepository: IVisitorsRepository
  ) {}
  public async execute(): Promise<any> {
    // const allVisiotors = await this.visitoryRepository.GetAllVisitors();
    function calculateTotalPerMonth(data: IData[]): { [month: string]: number }[] {
      const dataPerMonth: { [month: string]: number } = {};

      data.forEach((item) => {
        const month = new Date(item.data).toLocaleString("default", {
          month: "long",
        });

        if (!dataPerMonth[month]) {
          dataPerMonth[month] = 0;
        }

        dataPerMonth[month]++;
      });

      return Object.keys(dataPerMonth).map((month) => ({
        [month]: dataPerMonth[month],
      }));
    }

    const result = calculateTotalPerMonth(data);

    return result;
  }
}
