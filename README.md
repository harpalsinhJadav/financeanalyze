# Senior Developer Recruitment - Technical Exam

Welcome to the Finance Analyze technical assessment. Your goal is to identify, debug, and fix several issues within this codebase. The project is currently running, but it contains a variety of bugs ranging from minor typos to critical security vulnerabilities and broken business logic.

## Task Overview

You are expected to find and resolve the following:

### 1. Minor Issues (5)
- Find and fix typos in navigation labels and placeholders.
- Resolve any console warnings or minor UI inconsistencies (e.g., misaligned icons).
- Standardize terminology across the app (e.g., "Flagged" vs "Flaged").

### 2. UI/UX Issues (5)
- Fix layout overlapping issues on specific screens (e.g., Profile, Transaction Detail).
- Ensure consistent button styling and feedback across the application.
- Improve the responsive behavior of the dashboard cards.

### 3. Major Logic Issues (5)
- **Broken Search:** Searching transactions currently has several logical flaws. Make it robust and user-friendly.
- **Faulty Filtering:** The amount range filter is not working as expected. Ensure both Min and Max limits are respected.
- **Data Integrity:** New transactions are being stored with incorrect data types, causing downstream calculation errors.
- **Navigation Flow:** Fix broken redirects and success/error feedback loops in the "Add Transaction" flow.
- **State Sync:** Resolve issues where flagging a transaction in one view doesn't immediately reflect in others.

### 4. Security Vulnerabilities (3)
- **Hardcoded Secrets:** Locate and remove sensitive API keys or secrets that should not be in the source code.
- **Sensitive Data Logging:** Identify where the application is leaking sensitive user data to the console logs.
- **Insecure Data Storage:** Find and fix instances where PII (Personally Identifiable Information) is stored insecurely.

## Evaluation Criteria
- **Code Quality:** Clean, maintainable, and type-safe solutions.
- **Debugging Skill:** Ability to trace issues to their root cause efficiently.
- **Security Awareness:** Understanding of mobile and global security best practices (Hardcoded secrets, PII handling).
- **UX Intuition:** Fixing not just the code, but the user experience.

---

**Good luck! Please document your changes and provide a brief summary of how you approached the security fixes.**
