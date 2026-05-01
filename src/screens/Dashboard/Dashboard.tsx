import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';
import Charts from '../../components/Charts/Charts';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const { transactions, filters, searchTerm } = useTransactions();

  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (filters.category === '' || transaction.category === filters.category) &&
      transaction.amount >= filters.minAmount &&
      transaction.amount <= filters.maxAmount &&
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  console.log('Rendering Dashboard with', filteredTransactions.length, 'items');

  return (
    <Layout>
      <div>
        <Charts />
        <h2>Transactions</h2>
        <ul className={styles.transactionList}>
          {filteredTransactions.map((transaction) => (
            <li key={transaction.id} className={styles.transactionItem}>
              <Link to={`/transaction/${transaction.id}`}>
                <span>{transaction.description}</span>
                <span>{transaction.amount}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Dashboard;
