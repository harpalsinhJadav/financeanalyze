import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';

const Filters: React.FC = () => {
  const { filters, setFilters } = useTransactions();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleMinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, minAmount: parseFloat(e.target.value) });
  };

  const handleMaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, maxAmount: parseFloat(e.target.value) });
  };

  return (
    <Layout>
      <div>
        <h2>Filters</h2>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={filters.category}
            onChange={handleCategoryChange}
          />
        </div>
        <div>
          <label>Min Amount</label>
          <input
            type="number"
            value={filters.minAmount}
            onChange={handleMinAmountChange}
          />
        </div>
        <div>
          <label>Max Amount</label>
          <input
            type="number"
            value={filters.maxAmount}
            onChange={handleMaxAmountChange}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Filters;
