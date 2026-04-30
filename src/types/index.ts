
export interface User {
  id: string;
  name: string;
  avatar: string;
  card: {
    number: string;
    expiry: string;
    cvv: string;
  };
}

export type TransactionType = 'credit' | 'debit';

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: TransactionType;
  description: string;
  merchant: string;
  status: 'completed' | 'pending' | 'failed';
  isFlagged: boolean;
}

export interface Filters {
  type: 'all' | 'credit' | 'debit';
  dateRange: {
    from: string | null;
    to: string | null;
  };
  amountRange: {
    min: number | null;
    max: number | null;
  };
  isFlagged: boolean;
}

export interface AnalyticsData {
  creditVsDebit: {
    credit: number;
    debit: number;
  };
  weeklySummary: { week: string; amount: number }[];
  monthlySummary: { month: string; amount: number }[];
  totalFlagged: number;
}
