import React from 'react';
import { useTransactions } from '../../contexts/TransactionContext';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const { searchTerm, setSearchTerm } = useTransactions();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={styles.header}>
      <h1>Expense Tracker</h1>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </header>
  );
};

export default Header;
