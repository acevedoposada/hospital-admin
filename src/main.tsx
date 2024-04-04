import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>,
)
