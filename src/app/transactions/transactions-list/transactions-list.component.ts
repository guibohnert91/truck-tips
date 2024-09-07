import { AfterViewInit, Component, computed, inject, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Transaction } from '../models/Transaction';
import { TransactionStore } from '../transaction.store';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TransactionFormDialog } from '../transaction-form-dialog/transaction-form-dialog';

@Component({
  selector: 'app-transactions-list',
  standalone: true,
  imports: [MatTableModule, MatDialogModule, MatButtonModule, MatIcon, MatPaginatorModule],
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss'],
})
export class TransactionsListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  readonly store = inject(TransactionStore);
  readonly transactionFormDialog = inject(MatDialog);

  displayedColumns: string[] = ['id', 'title', 'type', 'actions'];
  dataSource = computed(() => new MatTableDataSource<Transaction>());

  ngAfterViewInit(): void {
    this.paginator.pageIndex = 0;
    this.dataSource = computed(() => {
      const dataSource = new MatTableDataSource<Transaction>();
      dataSource.data = this.store.transactions();
      dataSource.paginator = this.paginator;

      return dataSource;
    });
  }

  editTransaction(transaction: Transaction) {
    if (transaction) {
      this.store.setCurrentTransaction(transaction);
    }

    this.transactionFormDialog.open(TransactionFormDialog, {
      minWidth: '400px',
    });
  }

  deleteTransaction(transaction: Transaction) {
    if (transaction) {
      this.store.removeTransaction(transaction);
    }
    this.paginator.pageIndex = 0;
  }
}
