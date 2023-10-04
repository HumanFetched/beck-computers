export interface ITrafficData {
  date: string[];
  count: number[];
}

export interface ITrafficState {
  isLoading: boolean;
  statusTraffic: IStatusTraffic;
  error: string;
}

export interface IStatusTraffic {
  failed: ITrafficData;
  delivered: ITrafficData;
  bounce: ITrafficData;
}

export interface IRequestTraffic {
  fromDuration: string;
  toDuration: string;
}
