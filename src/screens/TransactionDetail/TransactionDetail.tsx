import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';

const TransactionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { transactions, toggleFlag } = useTransactions();
  const transaction = transactions.find((t) => t.id === id);

  return (
    <Layout>
      <div>
        <h2>Transaction Detail</h2>
        {transaction ? (
          <div>
            <p>ID: {transaction.id}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
            <p>Type: {transaction.type}</p>
            <p>Category: {transaction.category}</p>
            <button onClick={() => toggleFlag(transaction.id)}>
              {transaction.flagged ? 'Unflag' : 'Flag'}
            </button>
          </div>
        ) : (
          <p>Transaction not found</p>
        )}
      </div>
    </Layout>
  );
};

export default TransactionDetail;
