import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Analytics: React.FC = () => {
  const { transactions } = useTransactions();

  const data = transactions.reduce((acc, transaction) => {
    const category = acc.find((item) => item.name === transaction.category);
    if (category) {
      category.amount += transaction.amount;
    } else {
      acc.push({ name: transaction.category, amount: transaction.amount });
    }
    return acc;
  }, [] as { name: string; amount: number }[]);

  return (
    <Layout>
      <div>
        <h2>Analytics</h2>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </div>
    </Layout>
  );
};

export default Analytics;
