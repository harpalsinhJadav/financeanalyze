
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import transactionsReducer from './transactionsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
