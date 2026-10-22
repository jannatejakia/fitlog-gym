<div align="center">

# 🏋️ FitLog — Workout & Fitness Tracking App

**Explore exercises, build today's workout plan, and track your fitness goals — all in one place.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-1AD1A5?style=for-the-badge)](https://daisyui.com/)

</div>

---

## 📖 About The Project

**FitLog** is a modern fitness workout application built with **Next.js (App Router)**. It helps users discover exercises from a curated workout library, view detailed workout information, manage a personal training plan, save favorite routines for later, and keep track of their fitness goals in a streamlined user experience.

The app also includes authenticated user flows for sign-in, profile updates, password reset, and account management, giving the platform a complete workout-tracking experience beyond the library itself.

---

## Key Features

### 1. 🗂️ Workout Library
Browse a rich collection of exercises fetched from a live API, each card showing muscle groups, equipment, difficulty, duration, calories burned, and rating — with loading states for a smooth browsing experience.

### 2. 📋 Detailed Workout Pages
Every exercise has its own page (`/library/[logId]`) with a full description, equipment, sets & reps, calories, rating, and step-by-step instructions — plus graceful `not-found` and error handling.

### 3. 📅 Personal "Today's Plan"
Add any exercise to **Today's Plan** (`/my-plan`) with one click and keep track of the workouts you intend to complete, managed globally via React Context.

### 4. 🔖 Save Workouts for Later
Bookmark exercises into a dedicated **Saved** list so you can quickly find and plan them whenever you're ready to train.

### 5. 📊 Dashboard Stats & Smart Sorting
Your plan and saved lists include a summary dashboard — total exercises, combined duration, and calories burned — with sorting by **duration**, **calories burned**, or **rating**.

### 6. 🔐 User Authentication & Profile Management
FitLog includes account-related screens for **sign in**, **sign up**, **profile editing**, **password change**, **forgot password**, and **reset password** flows so users can manage their fitness account within the app.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router & optimized images (`next/image`) |
| [React 19](https://react.dev/) | Component-based UI development |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development (`ILog` workout data model) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first, responsive styling |
| [DaisyUI 5](https://daisyui.com/) | Prebuilt, themeable UI components (cards, badges, stats) |
| [React Icons](https://react-icons.github.io/react-icons/) | Iconography throughout the app |
| [React Toastify](https://fkhademi.github.io/react-toastify/) | User feedback notifications (add/remove actions) |
| [Context API](https://react.dev/reference/react/createContext) | Global state for plans and saved workouts |
| [HeroUI](https://heroui.com/en/docs/react/getting-started) | An open-source UI component library |
| [BetterAuth](https://better-auth.com/docs) | The most comprehensive authentication framework |
| [Resend](https://resend.com/docs/introduction) | Resend is the email API for developers. |
| REST API | Live workout data via `fetch` (server-side data loading) |

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** (or another package manager)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/fit-log-gym.git
cd fit-log-gym

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see FitLog.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint checks |

---

## 📁 Project Structure

```text
src/
├── app/                     # Next.js App Router pages & layouts
│   ├── (auth)/              # Sign-in, sign-up, profile, password flows
│   ├── api/                 # API endpoints and route handlers
│   ├── library/             # Workout library + dynamic detail pages
│   ├── my-plan/             # Today's Plan & Saved workouts
│   ├── loading.tsx          # Global app loading state
│   ├── not-found.tsx        # Custom 404 screen
│   ├── page.tsx             # Home page
│   └── layout.tsx           # App shell and providers
├── assets/                  # Static images (banner, logo, etc.)
├── components/              # UI components (homepage, details, plans)
│   ├── homepage/
│   ├── MyPlans/
│   └── shared/
├── context/                 # PlanContext — global plan & saved state
├── lib/                     # API helpers and auth utilities
├── types/                   # TypeScript interfaces (ILog)
├── proxy.ts                 # Proxy/data setup helper
└── app/globals.css          # Global styles and theme setup
```

---

## Contributing

Contributions are what make the open-source community such a great place to learn and create. If you'd like to contribute:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
