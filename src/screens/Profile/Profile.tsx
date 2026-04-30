import React from 'react';
import { User, Mail, Calendar, Moon, Sun } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { useTheme } from '../../contexts/ThemeContext';
import styles from './Profile.module.css';

const Profile: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: 'October 2023',
    initials: 'JD'
  };
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.profileCard}>
          <div className={styles.avatar}>
            {user.initials}
          </div>
          
          <div className={styles.header}>
            <h2 style={{ marginBottom: '0.5rem' }}>{user.name}</h2>
            <p style={{ opacity: 0.7 }}>Premium Member</p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <Mail size={16} />
                <label>Email Address</label>
              </div>
              <p>{user.email}</p>
            </div>
            <div className={styles.infoItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <Calendar size={16} />
                <label>Member Since</label>
              </div>
              <p>{user.memberSince}</p>
            </div>
          </div>

          <div className={styles.actions}>
            <button className={styles.themeBtn} onClick={toggleTheme}>
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
