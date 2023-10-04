type count = {
  count: number;
};

export interface ITotalCountResponse {
  count: number;
  _id: {
    status: string;
  };
}

export interface IHourlyMails {
  hourlyMailsSent: number;
}

export interface IRejectTypesResponse {
  mailLimitExceed: count[];
  others: count[];
}
