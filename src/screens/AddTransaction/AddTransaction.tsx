import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';

const AddTransaction: React.FC = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const { addTransaction } = useTransactions();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTransaction({ description, amount: amount, date, type: 'debit', category: 'uncategorized' });
    navigate('/');
  };

  return (
    <Layout>
      <div>
        <h2>Add Transaction</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    </Layout>
  );
};

export default AddTransaction;
