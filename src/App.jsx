import { Routes, Route } from 'react-router-dom'
import './App.css'

import Landingpg from './pages/Landingpg'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import ForgotPass from './components/Auth/ForgotPass'
import Onboarding from './pages/Onboarding'
import DashboardLayout from './layouts/DashboardLayout'
import Dashboard from './pages/Dashboard'

import Analytics from "./pages/Analytics";
import Brands from "./pages/Brands"
import Budget from "./pages/Budget"
import Calendar from "./pages/Calendar";
import Career from "./pages/Career";
import Curriculum from "./pages/Curriculum";
import Finance from "./pages/Finance";
import Flashcards from './pages/Flashcards'
import Goals from "./pages/Goals";
import Habits from './pages/Habits'
import Health from "./pages/Health";
import Ideas from './pages/Ideas'
import Inbox from './pages/Inbox'
import Insurance from './pages/Insurance'
import Investments from './pages/Investments'
import Journal from './pages/Journal'
import Meetings from './pages/Meetings'
import Notes from "./pages/Notes";
import Projects from './pages/Projects'
import Savings from './pages/Savings'
import School from "./pages/School"
import Settings from './pages/Settings'
import Spaces from './pages/Spaces'
import Tasks from "./pages/Tasks";
import Terms from './pages/Terms'
import Tracker from './pages/Tracker'

//pages/login
//pages/signup

export function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Landingpg />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPass" element={<ForgotPass />} />
      <Route path="/onboarding" element={<Onboarding />} />
      
        <Route element = {<DashboardLayout/>}>
          <Route
            path='/analytics'
            element={<Analytics />
          }
          />

          <Route
            path='/brands'
            element={<Brands />
          }
          />

          <Route
            path='/budget'
            element={<Budget />
          }
          />

          <Route
            path='/calendar'
            element={<Calendar />
          }
          />

          <Route
            path='/career'
            element={<Career />
          }
          />

          <Route
            path='/curriculum'
            element={<Curriculum />
          }
          />

          <Route
            path='/dashboard'
            element={<Dashboard />
          }
          />

          <Route
            path='/finance'
            element={<Finance />
          }
          />

          <Route
            path='/flashcards'
            element={<Flashcards />
          }
          />

          <Route
            path='/goals'
            element={<Goals />
          }
          />

          <Route
            path='/habits'
            element={<Habits />
          }
          />

          <Route
            path='/health'
            element={<Health />
          }
          />

          <Route
            path='/ideas'
            element={<Ideas />
          }
          />

          <Route
            path='/inbox'
            element={<Inbox />
          }
          />

          <Route
            path='/insurance'
            element={<Insurance />
          }
          />

          <Route
            path='/investments'
            element={<Investments />
          }
          />

          <Route
            path='/journal'
            element={<Journal />
          }
          />

          {/* pages/login */}
          
          <Route
            path='/meetings'
            element={<Meetings />
          }
          />

          <Route
            path='/notes'
            element={<Notes />
          }
          />

          <Route
            path='/projects'
            element={<Projects />
          }
          />

          <Route
            path='/savings'
            element={<Savings />
          }
          />

          <Route
            path='/school'
            element={<School />
          }
          />

          <Route
            path='/settings'
            element={<Settings />
          }
          />

          {/* pages/signup */}

          <Route
            path='/spaces'
            element={<Spaces />
          }
          />

          <Route
            path='/tasks'
            element={<Tasks />
          }
          />

          <Route
            path='/terms'
            element={<Terms />
          }
          />

          <Route
            path='/tracker'
            element={<Tracker />
          }
          />
        </Route>
    </Routes>
  );
}

export default App;