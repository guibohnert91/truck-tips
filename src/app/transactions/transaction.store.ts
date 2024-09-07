import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Transaction } from './models/Transaction';

export interface TransactionState {
  currentTransaction: Transaction | null;
  transactions: Transaction[];
}

export const initialState: TransactionState = {
  currentTransaction: null,
  transactions: [],
};

export const TransactionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    addTransaction(transaction: Transaction): void {
      patchState(store, {
        transactions: [...store.transactions(), transaction],
      });
    },
    setCurrentTransaction(transaction: Transaction | null): void {
      patchState(store, { currentTransaction: transaction, });
    },
    editTransaction(transaction: Transaction): void {
      patchState(store, {
        transactions: [...store
          .transactions()
          .filter((storeTransaction) => storeTransaction.id != transaction.id),
          transaction
        ],
      });
    },
    removeTransaction(transaction: Transaction): void {
      patchState(store, {
        transactions: store
          .transactions()
          .filter((storeTransaction) => storeTransaction.id != transaction.id),
      });
    },
  }))
);
