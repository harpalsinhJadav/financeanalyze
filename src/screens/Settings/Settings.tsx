import React, { useState } from 'react';
import { Settings as SettingsIcon, Bell, Shield, Eye, Globe } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import styles from './Settings.module.css';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    privacy: 'public',
    currency: 'USD'
  });

  const handleToggle = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.header} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <SettingsIcon size={28} />
          <h2 style={{ margin: 0 }}>System Settings</h2>
        </div>

        <div className={styles.settingsCard}>
          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Bell size={20} />
              <span>Notifications</span>
            </div>
            
            <div className={styles.settingRow}>
              <div className={styles.settingInfo}>
                <span className={styles.settingLabel}>Push Notifications</span>
                <span className={styles.settingDesc}>Receive real-time alerts for large transactions.</span>
              </div>
              <label className={styles.switch}>
                <input 
                  type="checkbox" 
                  checked={settings.notifications}
                  onChange={() => handleToggle('notifications')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>

            <div className={styles.settingRow} style={{ marginTop: '1rem' }}>
              <div className={styles.settingInfo}>
                <span className={styles.settingLabel}>Email Updates</span>
                <span className={styles.settingDesc}>Weekly summary of your spending habits.</span>
              </div>
              <label className={styles.switch}>
                <input 
                  type="checkbox" 
                  checked={settings.emailUpdates}
                  onChange={() => handleToggle('emailUpdates')}
                />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Shield size={20} />
              <span>Security & Privacy</span>
            </div>

            <div className={styles.settingRow}>
              <div className={styles.settingInfo}>
                <span className={styles.settingLabel}>Profile Visibility</span>
                <span className={styles.settingDesc}>Control who can see your financial goals.</span>
              </div>
              <select 
                className={styles.select}
                value={settings.privacy} 
                onChange={(e) => handleChange('privacy', e.target.value)}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="contacts">Contacts Only</option>
              </select>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionTitle}>
              <Globe size={20} />
              <span>Localization</span>
            </div>

            <div className={styles.settingRow}>
              <div className={styles.settingInfo}>
                <span className={styles.settingLabel}>Primary Currency</span>
                <span className={styles.settingDesc}>Currency used for all dashboard reports.</span>
              </div>
              <select 
                className={styles.select}
                value={settings.currency} 
                onChange={(e) => handleChange('currency', e.target.value)}
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
