# LifeOS

### One place for your goals, projects, habits, notes, career, health, finance, and life.

LifeOS is a personal productivity operating system designed to bring the fragmented systems of everyday life into one customizable, intelligent workspace.

Rather than treating productivity as a collection of isolated tools, LifeOS is designed around a unified system where planning, execution, personal development, organization, and progress tracking can coexist and evolve according to the user's needs.

**Live Demo:** https://lifeos-your-personal-os.vercel.app/

## Why LifeOS?

Modern productivity workflows are fragmented across specialized applications. Tasks live in one application. Notes live somewhere else. Calendars, finances, health tracking, learning, projects, goals, and career planning often require completely separate systems. This creates unnecessary context switching and forces users to maintain multiple workflows, interfaces, and accounts.

LifeOS aims to solve this by providing a single configurable productivity environment capable of adapting to different types of users and different areas of life.

**Instead of managing 8 apps and 8 passwords, get everything under 1 app and 1 password.**

The goal is not simply to combine existing productivity features. LifeOS is being designed as a personal operating system, where the structure of the workspace itself can adapt to the person using it.

### 🎯 Project Goals

- Build a customizable productivity operating system.
- Support multiple user profiles with different workflows and requirements.
- Provide a unified environment for personal, academic, professional, and creative organization.
- Keep the interface minimal, focused, and distraction-free.
- Make workspaces modular and user configurable.
- Build reusable systems rather than isolated feature implementations.
- Establish an architecture that can scale toward intelligent automation, integrations, and cloud-based functionality.

---

## 🧩 Core Capabilities

### 🧠 Personalized Dashboard

Each user receives a personalized workspace based on both their selected profile and the life modules they choose to manage.

- Multiple User Profiles
- Student Workspace
- Professional Workspace
- Creator Workspace
- Hobbyists & Self Learner Workspace
- Others
- AI Productivity Insights

### 🎲 Life Modules

LifeOS does not limit personalization to a user's career or primary profile.

During onboarding, users can select the areas of life they want LifeOS to support. These selections determine which modules and related workspace capabilities are relevant to the user's environment.

Examples include:

- Family & Relationships
- Health & Wellness
- Finance
- Learning
- Career
- Personal Projects
- Hobbies & Interests
- Goals & Personal Growth
- Other areas of personal life

This allows two users with the same primary profile to have completely different LifeOS environments based on the parts of their life they actually want to manage.

The objective is to make LifeOS adapt not only to **who the user is**, but also to **what the user wants to organize**.

### ⚙️ Adaptive Dashboard
The dashboard acts as the user's central productivity overview.
It is designed around configurable widgets rather than a fixed collection of components.

- Profile-specific navigation system
- Adaptive dashboard widgets based on the selected profile
- Collapsible sidebar with nested workspace navigation
- Persistent tab-based workspace navigation

### 📚 Productivity Ecosystem
These modules are intended to operate as interconnected parts of the same productivity system rather than isolated applications.

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
  - Curriculum
  - Flashcards
  - Study-oriented Workspace
- Professionals
  - Meetings
  - Budget
  - Savings
  - Investment
  - Insurance
  - Career & Project Management
- Content Creators:
  - Ideas Vault
  - Brand Deals
  - Content-oriented Workspace

---

## Current Features

### Authentication & Onboarding
- Login / Signup / Forgot Password
- Profile-based Onboarding
- Student, Professional, Creator, Hobbyist, and Other profiles
- Selectable life modules during onboarding
- Module-based workspace personalization
- Independent personalization of career/profile and broader life areas

### Dashboard
- Profile-based dashboard generation
- Customizable widget system
- Add/remove dashboard widgets
- Widget-specific settings
- Responsive dashboard layout
- Today's Focus
- AI Insights
- Greeting widget
- Quick statistics

### Navigation & Workspace Management
- Profile-specific navigation
- Workspace-based routing
- Nested workspace organisation
- Persistent tab navigation
- Collapsible navigation
- Modular workspace structure

### Customization
- Theme support
- CSS variable-based design system
- Configurable widget visibility
- Widget-specific configuration
- User-configurable dashboard structure

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

LifeOS uses a configuration-driven, modular frontend architecture designed to make the system extensible as new productivity modules are introduced.

### **Profile-driven navigation**  

User profiles determine the structure of the available workspace.

Navigation and workspace definitions are generated from configuration rather than being independently hardcoded into each interface.

### **Module-driven personalization**

LifeOS separates user profiles from life-area personalization.

Profiles establish the user's primary workflow, while selected modules determine which additional areas of life are relevant to that user.

This allows workspace configuration to be derived from both profile and module selections rather than relying on a single fixed user category.

### **Widget-driven dashboard**  

Dashboard components are treated as modular widgets.

A widget registry and configuration system allow widgets to be rendered dynamically, added or removed from the dashboard, and configured independently.

This creates a foundation for expanding the dashboard without continuously restructuring the core dashboard page.

### **Context-based state**  

React Context is used for shared application state, including:

  - User state
  - Dashboard state
  - Widget settings
  - Tab state

This allows different parts of the application to interact with shared state without tightly coupling individual components.

### **Reusable layout system**  

Core interface and application elements are separated into reusable modules.

Examples include:
  - Layout components
  - Dashboard widgets
  - Widget editors
  - Settings components
  - Navigation components
  - Shared UI components

The goal is to keep application logic separate from presentation wherever practical.

### **CSS variable design system**  

Visual tokens are centralized through CSS variables covering:
  - Colors
  - Typography
  - Spacing
  - Borders
  - Shadows
  - Theme values

This provides a consistent visual language while allowing the interface to evolve without scattering styling values throughout the application.

### **Extensibility**

The architecture is intentionally being built before the complete productivity ecosystem.

The long-term objective is to allow additional modules, integrations, automation systems, and AI capabilities to be introduced without rebuilding the foundation of the application.

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
│   │   ├── WidgetEditors/
│   │   ├── WidgetMarketplace/
│   │   └── Widgets/
│   ├── Layout/
│   └── Tasks/
├── config/
│   ├── Modules/
│   └── Workspaces/
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
Profile-Based Onboarding
        │
        ▼
Personalized Dashboard
        │
        ▼
Workspace Navigation
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
Analyze Activity
        │
        ▼
Gain Insights
        │
        ▼
Future Intelligent Assistance
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

## 🗺️ Development Roadmap

LifeOS is being developed progressively, with the architecture established before deeper automation and intelligence are introduced.

**Phase 1 — Foundation**
- Authentication
- Onboarding
- User profiles
- Core application architecture
- Configuration-driven navigation
- Dashboard foundation
- Theme and design system

**Phase 2 — Personalization**
- Profile-specific workspaces
- Configurable dashboard
- Widget registry
- Add/remove widgets
- Widget-specific settings
- Responsive layouts
- Modular workspace structure

**Phase 3 — Productivity Modules**
- Calendar & Scheduling
- Smart To-do Manager
- Goal Tracking
- Notes & Journal
- Personal Curriculum
- Career Dashboard
- Project Manager
- Health Tracker
- Finance Tracker
- Analytics Dashboard
- Other Module Pages

**Phase 4 — Intelligence**
- AI Productivity Insights
- Productivity Assistant
- Prioritization
- Intelligent recommendations
- Activity-based analysis
- Automated workflow assistance

**Phase 5 — Integrations**
- Gmail
- WhatsApp
- Google Calendar
- Outlook
- External productivity services

**Phase 6 — Platform Expansion**
- Mobile App
- Cloud Sync
- Cross-device persistence
- Expanded personalization

**Phase 7 — Collaboration**
- Shared Workspaces
- Collaborative productivity systems
- Shared projects and planning

**Phase 8 — Product Expansion**
- Premium Features
- Personal Companion
- Advanced automation
- Extended integrations
- Additional intelligent productivity capabilities

---

## ⏳ Future Vision

The long-term direction of LifeOS extends beyond traditional productivity management.

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
  - Living Companion System such as a Tree, Planet, or Pet that evolves over time based on the user's overall activity in LifeOS
- Collaboration
  - Shared Workspaces
- Business
  - Premium Features

---

## 🚧 Status

LifeOS is currently in active development.

The current focus is building the core architecture, dashboard system, profile-based workspaces, and modular components before implementing backend services, AI features, and cloud synchronization.

---

## 📄 License

This project is currently intended for educational and personal development purposes.
