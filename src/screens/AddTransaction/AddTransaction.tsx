import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, FileText, DollarSign, Calendar, Send } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';
import styles from './AddTransaction.module.css';

const AddTransaction: React.FC = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number | string>('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const { addTransaction } = useTransactions();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !date) return;
    
    addTransaction({ 
      description, 
      amount: Number(amount), 
      date, 
      category: 'uncategorized' 
    });
    navigate('/');
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.formCard}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <PlusCircle size={32} />
            </div>
            <h2>New Transaction</h2>
            <p>Fill in the details to record a new expense or income.</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className="input-group">
              <label className="label">Description</label>
              <div style={{ position: 'relative' }}>
                <FileText size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text)', opacity: 0.5 }} />
                <input
                  type="text"
                  className="input-field"
                  style={{ paddingLeft: '40px' }}
                  placeholder="e.g. Monthly Rent"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label className="label">Amount</label>
              <div style={{ position: 'relative' }}>
                <DollarSign size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text)', opacity: 0.5 }} />
                <input
                  type="number"
                  step="0.01"
                  className="input-field"
                  style={{ paddingLeft: '40px' }}
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label className="label">Date</label>
              <div style={{ position: 'relative' }}>
                <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text)', opacity: 0.5 }} />
                <input
                  type="date"
                  className="input-field"
                  style={{ paddingLeft: '40px' }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <span>Create Transaction</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddTransaction;
