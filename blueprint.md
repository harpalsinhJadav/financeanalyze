# Finance Analyze App - Blueprint

## Project Overview
A modern personal finance dashboard built with React, Vite, and TypeScript. It features transaction tracking, spending analytics via charts, and a clean, responsive interface.

## Current State & Features
- **Dashboard:** Displays spending overview with Pie and Bar charts.
- **Transaction Management:** Add new transactions and view transaction history.
- **Search & Filter:** Search transactions by description and filter by category/amount.
- **Flagging:** Mark suspicious or important transactions.
- **Theming:** Support for light and dark modes via `ThemeContext`.
- **Navigation:** Multi-page navigation using `react-router-dom`.

## Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Vanilla CSS Modules with global theme variables.
- **State Management:** React Context API (TransactionContext, ThemeContext).
- **Charts:** Chart.js with `react-chartjs-2`.
- **Navigation:** React Router 7.

## Recent Changes
- Fixed broken build by installing missing dependencies (`npm install`).
- Resolved missing CSS module files for `Layout` and `Sidebar` components.
- Fixed a `SyntaxError` in `TransactionContext.tsx` by using `import type` for the `Transaction` interface.
- Verified app functionality at `http://localhost:5173/`.

## Planned Improvements
- Enhance visual aesthetics with better gradients and micro-animations.
- Improve the "Add Transaction" form with better validation and UI feedback.
- Add more detailed analytics screens.
