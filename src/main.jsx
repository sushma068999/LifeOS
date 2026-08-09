import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import { TabProvider } from './context/TabContext.jsx'
import { UserProvider } from './context/UserContext.jsx'
import { DashboardProvider } from './context/DashboardContext.jsx'
import { WidgetProvider } from './context/WidgetContext.jsx'

import "@fontsource/poppins/600.css"
import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/jetbrains-mono/400.css"

import "./styles/colors.css"
import "./styles/typography.css"
import "./styles/globals.css"
import "./styles/spacing.css"
import "./styles/variables.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DashboardProvider>
          <WidgetProvider>
            <TabProvider>
              <App/>
            </TabProvider>
          </WidgetProvider>
        </DashboardProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)