import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';

const FlaggedTransactions: React.FC = () => {
  const { transactions } = useTransactions();
  const flaggedTransactions = transactions.filter((t) => t.flagged);

  return (
    <Layout>
      <div>
        <h2>Flagged Transactions</h2>
        <ul>
          {flaggedTransactions.map((transaction) => (
            <li key={transaction.id}>
              <span>{transaction.description}</span>
              <span>{transaction.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default FlaggedTransactions;
