import {StyleConfig} from "./style-config";

export interface ITrainStation {
  id: number;
  tag: string;
  name: string;
  generalPrices: {
    buyPrice: number;
    mortgageIncome: number;
    mortgageBuyBack: number;
  };
  rentPrices: {
    base: number;
    twoStation: number;
    threeStation: number;
    fourStation: number;
  };
  style?: StyleConfig
}
