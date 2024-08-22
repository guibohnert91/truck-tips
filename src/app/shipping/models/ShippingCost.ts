import { ShippingCostType } from './ShippingCostType';

export interface ShippingCost {
  name: string;
  value: number;
  type: ShippingCostType;
}
