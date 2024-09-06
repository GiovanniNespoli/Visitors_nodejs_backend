interface IChurch {
  id: number;
  label: string;
  number: number;
  createdAt: Date;
  updatedAt: Date;
}

interface ICreateChurch {
  label: string;
  number: number;
}

interface IUpdateChurch {
  id: number;
  label: string;
  number: number;
}

export { IChurch, ICreateChurch, IUpdateChurch };
