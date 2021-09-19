import {StyleConfig} from "./style-config";

export interface IProperty {
  id: number;
  tag: string;
  name: string;
  generalPrices: {
    buyPrice: number;
    housePrice: number;
    hotelPrice: number;
    mortgageIncome: number;
    mortgageBuyBack: number;
  }
  rentPrices: {
    base: number;
    full: number;
    oneHouse: number;
    twoHouse: number;
    threeHouse: number;
    fourHouse: number;
    hotel: number;
  };
  style?: StyleConfig
}
