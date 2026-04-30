import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { TransactionProvider } from './contexts/TransactionContext';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <TransactionProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TransactionProvider>
    </ThemeProvider>
  );
};

export default App;
