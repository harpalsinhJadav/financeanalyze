import React from 'react';
import { useTransactions } from '../../contexts/TransactionContext';
import styles from './Header.module.css';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const { searchTerm, setSearchTerm } = useTransactions();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const {theme} = useTheme()

  console.log("theme",theme)

  const headerColor = theme === 'dark' ? styles.header : styles.headerTitleDark

  return (
    <header className={headerColor}>
      <h1 className={styles.headerTitle}>Expense Tracker</h1>
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
