import {StyleConfig} from "./style-config";

export interface ICompany {
  id: number;
  tag: string;
  name: string;
  generalPrices: {
    buyPrice: number;
    mortgageIncome: number;
    mortgageBuyBack: number;
  },
  rentPrices: {
    baseMultiplier: number;
    allMultiplier: number;
  };
  style?: StyleConfig
}
