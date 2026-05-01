import React from 'react';
import { Filter, Tag, DollarSign } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { useTransactions } from '../../contexts/TransactionContext';
import styles from './Filters.module.css';

const Filters: React.FC = () => {
  const { transactions, filters, setFilters } = useTransactions();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleMinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, minAmount: parseFloat(e.target.value) || 0 });
  };

  const handleMaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, maxAmount: parseFloat(e.target.value) || Infinity });
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesCategory = filters.category === '' || t.category.includes(filters.category);
    
    const matchesMinAmount = t.amount >= filters.minAmount;
    
    const matchesMaxAmount = t.amount <= filters.maxAmount;
    
    return matchesCategory && matchesMinAmount && matchesMaxAmount;
  });

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
              placeholder="e.g. Food, transctions"
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

        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <h3>Filtered Results</h3>
            <span className={styles.countBadge}>{filteredTransactions.length} found</span>
          </div>

          <div className={styles.list}>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((t) => (
                <div key={t.id} className={styles.transactionCard}>
                  <div className={styles.mainInfo}>
                    <span className={styles.desc}>{t.description}</span>
                    <div className={styles.meta}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Tag size={12} /> {t.category}
                      </span>
                      <span>{t.date}</span>
                    </div>
                  </div>
                  <span className={styles.amount}>
                    ${t.amount.toFixed(2)}
                  </span>
                </div>
              ))
            ) : (
              <div className={styles.empty}>
                No transactions match your filters.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Filters;
