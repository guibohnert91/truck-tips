import { Routes } from '@angular/router';
import { ShippingCostsComponent } from './shipping/shipping-costs/shipping-costs.component';
import { ShippingCalculatorComponent } from './shipping/shipping-calculator/shipping-calculator.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const routes: Routes = [
  {
    path: 'shipping',
    children: [
      {
        path: 'calculator',
        component: ShippingCalculatorComponent,
      },
      {
        path: 'costs',
        component: ShippingCostsComponent,
      },
    ],
  },
  {
    path: 'transactions',
    component: TransactionsComponent,
  },
];
