import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Layout.module.css';
import '../../theme.css';

const Layout: React.FC = ({ children }) => {
  const { theme } = useTheme();
  
  // BUG 21: Leaking sensitive data to logs (Security - Global)
  console.log('User Session Debug:', {
    user: 'John Doe',
    email: 'john.doe@example.com',
    card: { number: '**** **** **** 4242', cvv: '123', expiry: '12/26' }
  });

  return (
    <div className={`${styles.layout} ${theme}`}>
      <Header />
      <div className={styles.main}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
