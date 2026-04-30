export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  category: string;
  flagged: boolean;
}

export const transactions: Transaction[] = [
  {
    id: '1',
    date: '2023-10-27',
    description: 'Coffee Shop',
    amount: -5.0,
    category: 'Food',
    flagged: false,
  },
  {
    id: '2',
    date: '2023-10-27',
    description: 'Salary',
    amount: 2000.0,
    category: 'Income',
    flagged: false,
  },
  {
    id: '3',
    date: '2023-10-26',
    description: 'Grocery Store',
    amount: -75.0,
    category: 'Food',
    flagged: true,
  },
];
