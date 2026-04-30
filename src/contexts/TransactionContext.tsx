import React, { createContext, useContext, useState } from 'react';
import { transactions as initialTransactions } from '../data/transactions';
import type { Transaction } from '../data/transactions';

interface Filters {
  category: string;
  minAmount: number;
  maxAmount: number;
}

interface TransactionContextData {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id' | 'flagged'>) => void;
  toggleFlag: (id: string) => void;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);

export const TransactionProvider: React.FC = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [filters, setFilters] = useState<Filters>({ category: '', minAmount: 0, maxAmount: Infinity });
  const [searchTerm, setSearchTerm] = useState('');


  const addTransaction = (transaction: Omit<Transaction, 'id' | 'flagged'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: (transactions.length + 1).toString(),
      flagged: false,
    };
    setTransactions([...transactions, newTransaction]);
  };

  const toggleFlag = (id: string) => {
    const newTransactions = transactions;
    const index = newTransactions.findIndex(t => t.id === id);
    if (index !== -1) {
      newTransactions[index].flagged = !newTransactions[index].flagged;
      setTransactions(newTransactions);
    }
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction, toggleFlag, filters, setFilters, searchTerm, setSearchTerm }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
