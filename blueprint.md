# Financial Dashboard Application Blueprint

## Overview

This document outlines the plan and implementation details for a multi-screen financial dashboard web application built with React, Vite, and TypeScript. The application will feature a clean, modern UI with a strict separation of concerns, modular architecture, and simulated API interactions.

## Core Technologies

- **UI Framework:** React JS (with Vite)
- **Language:** TypeScript
- **State Management:** Redux Toolkit (for transactions, analytics) and Context API (for theme, user settings)
- **Routing:** React Router DOM
- **Styling:** CSS Modules
- **Charting:** Recharts
- **Icons:** Lucide React

## Project Structure

The project will follow a strict folder structure to ensure a clean separation of concerns:

```
/src
├──- /assets
├──- /components
├──- /contexts
├──- /hooks
├──- /screens
├──- /services
├──- /store (Redux)
├──- /styles
├──- /types
└──- /utils
```

## Implemented Features

*(This section will be updated as features are built.)*

## Development Plan

### Phase 1: Setup and Foundation (Current)

- **Step 1.1:** Install necessary dependencies (`@reduxjs/toolkit`, `react-redux`, `react-router-dom`, `recharts`, `lucide-react`, `clsx`).
- **Step 1.2:** Create the mandatory folder structure.
- **Step 1.3:** Define core TypeScript types in `/src/types`.
- **Step 1.4:** Set up the Redux store in `/src/store`.
- **Step 1.5:** Create a Theme Context in `/src/contexts`.
- **Step 1.6:** Implement routing in `src/App.tsx` and wrap the app with the necessary providers.

### Phase 2: Mock Services and Data

- Implement mock API services for transactions and user data.

### Phase 3: Core Components

- Build reusable UI components (`TransactionList`, `ATMCard`, `Loader`, etc.).

### Phase 4: Screen Implementation

- Build each screen one by one, starting with the Dashboard.
  - Dashboard Screen
  - Transaction Detail Screen
  - Profile Screen
  - Analytics Screen
  - Flagged Transactions Screen
  - Add Transaction Screen
  - Advanced Filter Screen

