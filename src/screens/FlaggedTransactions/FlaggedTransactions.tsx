import React from 'react';
import { Flag, AlertCircle, Calendar } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';
import styles from './FlaggedTransactions.module.css';

const FlaggedTransactions: React.FC = () => {
  const { transactions } = useTransactions();
  const flaggedTransactions = transactions.filter((t) => t.flagged);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <Flag size={28} color="#ef4444" fill="#ef4444" />
          <h2>Flagged Transactions</h2>
        </div>

        {flaggedTransactions.length === 0 ? (
          <div className={styles.emptyState}>
            <AlertCircle size={48} opacity={0.3} />
            <h3>No flagged transactions</h3>
            <p>Transactions you mark as suspicious will appear here.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {flaggedTransactions.map((transaction) => (
              <div key={transaction.id} className={styles.flaggedCard}>
                <div className={styles.info}>
                  <span className={styles.description}>{transaction.description}</span>
                  <div className={styles.date}>
                    <Calendar size={12} style={{ marginRight: '4px' }} />
                    {transaction.date}
                  </div>
                </div>
                <span className={styles.amount}>
                  ${Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FlaggedTransactions;
