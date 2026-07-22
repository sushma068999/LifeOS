# LifeOS

### One place for your goals, projects, habits, notes, career, health, finance, and life.

LifeOS is a personal productivity operating system designed to help people organize every aspect of their lives through one clean, minimal, and intelligent workspace.

Live Demo: https://lifeos-your-personal-os.vercel.app/

## Why LifeOS?

Most productivity apps solve only one part of life. Tasks, notes, calendars, finance, health, learning, and goals are often scattered across multiple applications.

LifeOS aims to bring these systems together in one customizable workspace that adapts to different kinds of users instead of forcing everyone into the same workflow.

Instead of managing 8 apps & 8 passwords, get everything under 1 app & 1 password.

### 🎯 Project Goals

- Build a customizable productivity operating system.
- Support multiple user profiles.
- Keep the interface minimal and distraction-free.
- Make every workspace modular and user configurable.

---

## ✅ Features

- User Authentication (Login/Signup/Forgot Password)
- Themes & Customization
- Collapsible Sidebar
- Nested Workspace Organisation
- Persistent Top Navigation (Tab Bar)
- Customizable Workspace Structure (by user profile)

---

## 🧩 Core Modules

### 🧠 Personalised Dashboard

- Multiple User Profiles
- Student Workspace
- Professional Workspace
- Creator Workspace
- Hobbyists & Self Learner Workspace
- AI Productivity Insights

### ⚙️ Dynamic Sidebar & Dashboard

- Profile-specific navigation system
- Adaptive dashboard widgets based on the selected profile
- Collapsible sidebar with nested workspace navigation
- Persistent tab-based workspace navigation

### 📚 Productivity Ecosystem

- Calendar & Scheduling
- Smart To-do Manager
- Goal Tracking
- Smart Inbox & Auto Scheduling
- Notes & Journal
- Personal Curriculum
- Career Dashboard
- Project Manager
- Health Tracker
- Finance Tracker
- Analytics Dashboard

### 👥 Profile-Specific Ecosystem (Additional)

- Students:
  - School/Organisation
  - Flashcards
- Professionals
  - Meetings
  - Budget
  - Savings
  - Investment
  - Insurance
- Content Creators:
  - Ideas Vault
  - Brand Deals

---

## ⏳ Future Roadmap

- AI
  - Productivity Assistant
  - Prioritization
- Integrations
  - Gmail
  - WhatsApp
  - Google Calendar
  - Outlook
- Platform
  - Mobile App
  - Cloud Sync
- Customization
  - Dynamically changing themes based on time of the day
- Collaboration
  - Shared Workspaces
- Business
  - Premium Features

---

## 🛠 Tech Stack

| Technology    | Purpose                           |
| ------------- | --------------------------------- |
| React         | Component-based UI                |
| React Router  | Client-side routing               |
| Context API   | Global state management           |
| LocalStorage  | Persist user preferences and tabs |
| JavaScript (ES6+) | Modern application logic and interactive functionality |
| CSS Variables | Theme management                  |
| Lucide React  | Icons                             |
| Vite          | Fast development and build tool   |

---

## 🎨 Design Philosophy

LifeOS follows a calm, distraction-free interface inspired by modern productivity software.

### Theme

- Light/Dark/System Themes
- Off-white background
- Sage Green accents
- Soft Blue analytics
- Minimal shadows
- Rounded components
- Clean typography
- Dynamically Changing Themes based on the time of day

---
## 🏗️ Architecture

LifeOS is built around reusable configuration-driven components.

- Sidebar generated from profile configuration
- Dashboard generated through widget registry
- Context API for global state
- Modular pages for each workspace

---
## 📂 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Commons/
│   ├── Landing/
│   ├── Auth/
│   │   └── OnboardingPP/
│   ├── Dashboard/
│   │   └── Widgets/
│   ├── Layout/
│   └── Tasks/
├── context/
├── hooks/
├── data/
│   └── dashboard/
├── layouts/
├── services/
├── widgets/
│   ├── GreetingCard/
│   ├── QuickStats/
│   ├── TodaysFocus/
│   └── AIInsights/
├── styles/
├── utils/
├── config/
├── pages/
└── App.jsx
```
---

## 📂 Application Workflow
```
User Opens LifeOS
        │
        ▼
Authentication
(Login / Signup)
        │
        ▼
Onboarding popup steps
        │
        ▼
Dashboard
        │
        ▼
Navigate using Sidebar
        │
        ▼
Open Workspace
        │
        ├── Goals
        ├── Career
        ├── Health
        ├── Finance
        ├── Growth
        ├── Projects
        ├── Study
        └── Custom Spaces
        │
        ▼
Manage Tasks, Notes,
Calendar & Personal Data
        │
        ▼
Track Progress
        │
        ▼
Gain Insights
```
---

## 🚀 Getting Started

Clone the repository.
```bash
git clone https://github.com/yourusername/lifeos.git
```
Navigate to the project.
```bash
cd lifeos
```
Install dependencies.
```bash
npm install
```
Run the development server.
```bash
npm run dev
```

---

## 🚧 Status

LifeOS is currently in active development.

The current focus is building the core architecture, dashboard system, profile-based workspaces, and modular components before implementing backend services, AI features, and cloud synchronization.

---

## 📄 License

This project is for educational purposes and personal development.

© 2026 LifeOS
