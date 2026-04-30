import React from 'react';
import { Filter, Tag, DollarSign } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';
import styles from './Filters.module.css';

const Filters: React.FC = () => {
  const { filters, setFilters } = useTransactions();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleMinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, minAmount: parseFloat(e.target.value) || 0 });
  };

  const handleMaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, maxAmount: parseFloat(e.target.value) || Infinity });
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header}>
          <Filter size={28} />
          <h2>Search Filters</h2>
        </div>

        <div className={styles.filterCard}>
          <div className={styles.section}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Tag size={18} opacity={0.7} />
              <label className="label" style={{ marginBottom: 0 }}>Category</label>
            </div>
            <input
              type="text"
              className="input-field"
              placeholder="e.g. Food, Income"
              value={filters.category}
              onChange={handleCategoryChange}
            />
          </div>

          <div className={styles.section}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DollarSign size={18} opacity={0.7} />
              <label className="label" style={{ marginBottom: 0 }}>Amount Range</label>
            </div>
            <div className={styles.rangeInputs}>
              <input
                type="number"
                className="input-field"
                placeholder="Min"
                value={filters.minAmount === 0 ? '' : filters.minAmount}
                onChange={handleMinAmountChange}
              />
              <span>to</span>
              <input
                type="number"
                className="input-field"
                placeholder="Max"
                value={filters.maxAmount === Infinity ? '' : filters.maxAmount}
                onChange={handleMaxAmountChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Filters;
