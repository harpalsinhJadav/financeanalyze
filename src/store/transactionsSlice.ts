
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction, Filters } from '../types';

interface TransactionsState {
  transactions: Transaction[];
  filters: Filters;
  loading: boolean;
  error: string | null;
}

const initialState: TransactionsState = {
  transactions: [],
  filters: {
    type: 'all',
    dateRange: { from: null, to: null },
    amountRange: { min: null, max: null },
    isFlagged: false,
  },
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.unshift(action.payload);
    },
    updateTransaction: (state, action: PayloadAction<Transaction>) => {
      const index = state.transactions.findIndex(t => t.id === action.payload.id);
      if (index !== -1) {
        state.transactions[index] = action.payload;
      }
    },
    setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const {
  setTransactions,
  addTransaction,
  updateTransaction,
  setFilters,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
