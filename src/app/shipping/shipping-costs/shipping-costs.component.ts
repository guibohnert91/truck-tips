import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShippingCostsTableComponent } from './costs-table/shipping-costs-table.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-shipping-costs',
  standalone: true,
  imports: [CommonModule, MatButton, ShippingCostsTableComponent],
  templateUrl: './shipping-costs.component.html',
  styleUrls: ['./shipping-costs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingCostsComponent {

  addCost() {}



}
