import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { TransactionsListComponent } from './transactions-list/transactions-list.component';
import {
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { TransactionFormDialog } from './transaction-form-dialog/transaction-form-dialog';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    MatDialogModule,
    TransactionsListComponent,
  ],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionsComponent {
  readonly transactionFormDialog = inject(MatDialog);

  addTransaction() {
    this.transactionFormDialog.open(TransactionFormDialog, {
      minWidth: '400px',
    });
  }
}
