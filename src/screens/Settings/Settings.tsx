import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    privacy: 'public',
  });

  const handleNotificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, notifications: e.target.checked });
  };

  const handlePrivacyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSettings({ ...settings, privacy: e.target.value });
  };

  return (
    <Layout>
      <div>
        <h2>Settings</h2>
        <div>
          <label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={handleNotificationChange}
            />
            Enable Notifications
          </label>
        </div>
        <div>
          <label>
            Privacy
            <select value={settings.privacy} onChange={handlePrivacyChange}>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </label>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
