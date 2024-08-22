import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-shipping-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shipping-calculator.component.html',
  styleUrls: ['./shipping-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShippingCalculatorComponent {}
