import { Routes } from '@angular/router';
import { ShippingCostsComponent } from './shipping-costs/shipping-costs.component';
import { ShippingCalculatorComponent } from './shipping-calculator/shipping-calculator.component';

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
];
