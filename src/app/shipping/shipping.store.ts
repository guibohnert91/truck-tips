import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ShippingCost } from './models/ShippingCost';
import { ShippingCostType } from './models/ShippingCostType';

export interface ShippingState {
  costs: ShippingCost[];
  costTypes: ShippingCostType[];
}

export const initialState: ShippingState = {
  costs: [],
  costTypes: [],
};

export const ShippingStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    addCost(cost: ShippingCost): void {
      patchState(store, { costs: [...store.costs(), cost] });
    },
    removeCost(cost: ShippingCost): void {
      patchState(store, {
        costs: store.costs().filter((storeCost) => storeCost != cost),
      });
    },
    addCostType(costType: ShippingCostType): void {
      patchState(store, { costTypes: [...store.costTypes(), costType] });
    },
    removeCostType(costType: ShippingCostType): void {
      patchState(store, {
        costs: store.costs().filter((storeCost) => storeCost.type != costType),
        costTypes: store
          .costTypes()
          .filter((storeCostType) => storeCostType != costType),
      });
    },
  }))
);
