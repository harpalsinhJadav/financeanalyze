import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard/Dashboard';
import AddTransaction from '../screens/AddTransaction/AddTransaction';
import TransactionDetail from '../screens/TransactionDetail/TransactionDetail';
import FlaggedTransactions from '../screens/FlaggedTransactions/FlaggedTransactions';
import Filters from '../screens/Filters/Filters';
import Profile from '../screens/Profile/Profile';
import Settings from '../screens/Settings/Settings';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/add" element={<AddTransaction />} />
      <Route path="/transaction/:id" element={<TransactionDetail />} />
      <Route path="/flagged" element={<FlaggedTransactions />} />
      <Route path="/filters" element={<Filters />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
