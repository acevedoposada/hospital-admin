import { FluentProvider, teamsDarkTheme } from '@fluentui/react-components';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App.tsx';
import './index.scss';
import 'dayjs/locale/es';
import * as dayjs from 'dayjs';

dayjs.locale('es');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FluentProvider theme={teamsDarkTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>
);
