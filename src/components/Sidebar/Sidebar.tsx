import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <nav>
        <ul>
          <li><NavLink to="/" end>Dashboard</NavLink></li>
          <li><NavLink to="/add">Add Transaction</NavLink></li>
          <li><NavLink to="/flagged">Flagged Transactions</NavLink></li>
          <li><NavLink to="/filters">Filters</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
