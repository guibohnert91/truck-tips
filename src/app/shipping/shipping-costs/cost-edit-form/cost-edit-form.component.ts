import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from '@angular/material/dialog';
import { ShippingCost } from '../../models/ShippingCost';
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
} from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { ShippingCostType } from '../../models/ShippingCostType';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-shipping-cost-edit-form',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogClose,
    MatError,
    MatLabel,
    MatButton,
    MatSelect,
    MatOption,
    MatFormField,
    MatHint,
    ReactiveFormsModule,
  ],
  templateUrl: './cost-edit-form.component.html',
  styleUrls: ['./cost-edit-form.component.scss'],
})
export class ShippingCostEditFormComponent {
  costTypes: ShippingCostType[] = [];

  constructor(
    public dialogRef: MatDialogRef<ShippingCostEditFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShippingCost
  ) {}

  submit() {
    // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {}
}
