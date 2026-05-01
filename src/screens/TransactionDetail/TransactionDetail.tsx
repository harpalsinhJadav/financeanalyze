import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Flag, 
  Calendar, 
  Tag, 
  Hash, 
  ShoppingBag, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';
import styles from './TransactionDetail.module.css';

const TransactionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { transactions, toggleFlag } = useTransactions();
  alert(transactions)
  const transaction = transactions.find((t) => t.id === id);

  useEffect(() => {},[toggleFlag])

  if (!transaction) {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h2>Transaction Not Found</h2>
            <p>The transaction you are looking for does not exist or has been removed.</p>
            <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>
              Back to Dashboard
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', marginBottom: '1.5rem', fontWeight: 500 }}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className={styles.receiptCard}>
          <div className={styles.header}>
            <div className={styles.merchantIcon}>
              <ShoppingBag size={32} />
            </div>
            <div className={styles.amount}>
              ${Math.abs(transaction.amount).toFixed(2)}
            </div>
            <div className={`${styles.status} ${transaction.status === 'completed' ? styles.statusCompleted : styles.statusPending}`}>
              {transaction.status === 'completed' ? <CheckCircle2 size={14} /> : <Clock size={14} />}
              {transaction.status || 'Completed'}
            </div>
          </div>

          <div className={styles.details}>
            <div className={styles.detailRow}>
              <div className={styles.label}>
                <Hash size={16} />
                <span>Transaction ID</span>
              </div>
              <span className={styles.value}>#{transaction.id}</span>
            </div>

            <div className={styles.detailRow}>
              <div className={styles.label}>
                <Tag size={16} />
                <span>Category</span>
              </div>
              <span className={styles.value}>{transaction.category}</span>
            </div>

            <div className={styles.detailRow}>
              <div className={styles.label}>
                <Calendar size={16} />
                <span>Date</span>
              </div>
              <span className={styles.value}>{transaction.date}</span>
            </div>

            <div className={styles.detailRow}>
              <div className={styles.label}>
                <ShoppingBag size={16} />
                <span>Merchant</span>
              </div>
              <span className={styles.value}>{transaction.merchant || 'General Merchant'}</span>
            </div>

            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
              <div className={styles.label} style={{ marginBottom: '0.5rem' }}>Description</div>
              <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-h)' }}>{transaction.description}</p>
            </div>
          </div>

          <div className={styles.footer}>
            <button 
              className={`${styles.flagBtn} ${transaction.flagged ? styles.flagged : ''}`} 
              onClick={() => toggleFlag(transaction.id)}
            >
              <Flag size={18} fill={transaction.flagged ? 'white' : 'transparent'} />
              <span>{transaction.flagged ? 'Flagged as Suspicious' : 'Flag Transaction'}</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TransactionDetail;
