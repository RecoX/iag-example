# 🚗 Insurance Claims Dashboard

This is a copy for the State Insurance website, focus solely in the claim workflow, built with **React**, **Vite**, and **Tailwind CSS**. 
This app allows users to file claims through a multi-step wizard, view active claims, and manage repair options based on incident type.

---

## 🧱 Tech Stack

| Technology       | Description                                     |
|------------------|-------------------------------------------------|
| React            | UI library for building reusable components     |
| Vite             | Lightning-fast dev server and build tool        |
| Tailwind CSS     | Utility-first styling framework                 |
| React Router     | Page routing and navigation                     |
| Vitest           | Unit testing framework                          |
| React Testing Library | Component testing utilities                 |

---

## 📁 Project Structure

```bash
src/
├── components/
│   └── CreateClaimWizard/
│       ├── Step1SelectAsset/
│       ├── Step2Disclaimer/
│       ├── Step3IncidentTime/
│       ├── Step4IncidentType/
│       ├── Step5FullIncidentForm/
│       │   └── sections/
│       └── GlassClaim/
├── pages/
│   └── CreateClaim.jsx
│   └── ActiveClaims.jsx
├── Wrappers/
│   └── SectionWrapper.jsx
├── App.jsx
└── main.jsx
```

---

## 🧭 Features

### 🧾 Claim Wizard

- Step-by-step guided form for submitting motor insurance claims:
  1. Select a policy
  2. Accept disclaimers
  3. Enter incident date and time
  4. Choose incident type
  5. Complete detailed form or select a glass repairer

### 🪟 Glass Claim Path

- When "Glass damage only" is selected, users are guided to book directly with:
  - [Smith and Smith](https://www.smithandsmith.co.nz/access/details?ref=123456)
  - [Novus Glass](https://www.novusbooking.co.nz/default.aspx?insurer=state%20insurance)

### 📋 Active Claims

- Active claims are stored in `localStorage` and displayed on the dashboard
- Includes modal detail view for each claim

---

## 🧪 Testing

### ✅ Unit Tests

- Written using [Vitest](https://vitest.dev) + React Testing Library
- Located next to each component, e.g.:

```bash
src/components/CreateClaimWizard/Step1SelectAsset/Step1SelectAsset.test.jsx
```

### 💡 Run tests

```bash
npm run test
```

Watches for file changes and reruns affected tests.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

---

## 📌 Future Improvements

- Persist claims to backend API
- Add validations to final form
- Role-based login & admin interface
- Upload photos/documents for damage
- E2E tests (Playwright or Cypress)
