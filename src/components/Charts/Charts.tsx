import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { useTransactions } from '../../contexts/TransactionContext';
import 'chart.js/auto';

const Charts: React.FC = () => {
  const { transactions } = useTransactions();

  const categoryData = {
    labels: Array.from(new Set(transactions.map((t) => t.category))),
    datasets: [
      {
        data: Array.from(
          new Set(transactions.map((t) => t.category))
        ).map((category) =>
          transactions
            .filter((t) => t.category === category)
            .reduce((acc, t) => acc + t.amount, 0)
        ),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  const spendingData = {
    labels: Array.from(new Set(transactions.map((t) => t.date))),
    datasets: [
      {
        label: 'Spending Over Time',
        data: Array.from(new Set(transactions.map((t) => t.date))).map((date) =>
          transactions
            .filter((t) => t.date === date)
            .reduce((acc, t) => acc + t.amount, 0)
        ),
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div>
      <div>
        <h3>Spending by Category</h3>
        <Pie data={categoryData} />
      </div>
      <div>
        <h3>Spending Over Time</h3>
        <Bar data={spendingData} />
      </div>
    </div>
  );
};

export default Charts;
