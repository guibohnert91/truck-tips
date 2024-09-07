import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TransactionStore } from '../transaction.store';
import { Transaction } from '../models/Transaction';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatLabel, MatError, MatDatepickerModule,
    MatDialogContent, MatDialogActions, MatDialogClose,
    MatCardModule,
    MatFormField, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-form-dialog.html',
  styleUrls: ['./transaction-form-dialog.scss'],
})
export class TransactionFormDialog implements OnInit, OnDestroy {
  readonly dialogRef = inject(MatDialogRef<TransactionFormDialog>);
  readonly formBuilder = inject(FormBuilder)
  readonly store = inject(TransactionStore);

  readonly dataLenght: number = 300;
  readonly titleLenght: number = 50;

  formGroup!: FormGroup;
  currentTransaction = computed(() => this.store.currentTransaction());
  types: string[] = ['Income', 'Outcome'];

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(this.currentTransaction()?.id),
      title: new FormControl(this.currentTransaction()?.title, [Validators.required, Validators.maxLength(this.titleLenght)]),
      type: new FormControl(this.currentTransaction()?.type, [Validators.required]),
      dateTime: new FormControl(this.currentTransaction()?.dateTime, [Validators.required]),
      data: new FormControl(this.currentTransaction()?.data, [Validators.required, Validators.maxLength(this.dataLenght)]),
    });
  }

  ngOnDestroy(): void {
    this.store.setCurrentTransaction(null);
  }

  saveTransaction() {
    if (this.formGroup.invalid) {
      return;
    } else {
      let formValue = this.formGroup.value;
      let transaction: Transaction = {
        id: formValue.id,
        title: formValue.title,
        type: formValue.type,
        dateTime: formValue.dateTime,
        data: formValue.data,
      }

      if (transaction?.id) {
        this.store.editTransaction(transaction);
      } else {
        transaction.id = crypto.randomUUID();
        this.store.addTransaction(transaction);
      }

      this.dialogRef.close();
    }
  }
}
