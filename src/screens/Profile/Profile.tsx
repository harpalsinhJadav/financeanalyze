import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useTheme } from '../../contexts/ThemeContext';

const Profile: React.FC = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    memberSince: '2023-01-01',
  };
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className={`${theme}`}>
        <h2>Profile</h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Member Since: {user.memberSince}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </Layout>
  );
};

export default Profile;
