import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shipping-costs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping-costs.component.html',
  styleUrls: ['./shipping-costs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingCostsComponent {}
