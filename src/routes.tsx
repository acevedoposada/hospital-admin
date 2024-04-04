import { Navigate, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import { Routes } from './constants/routes';
import { GeneralLayout } from './layouts';

const DashboardPage = lazy(() => import('modules/pages/dashboard/dashboard.page'));
const ClinicHistoryPage = lazy(() => import('modules/pages/clinic-history/clinic-history.page'));
const MedicamentsPage = lazy(() => import('modules/pages/medicaments/medicaments.page'));
const AppointmentsPage = lazy(() => import('modules/pages/appointments/appointments.page'));
const ExamsPage = lazy(() => import('modules/pages/exams/exams.page'));

const router = createBrowserRouter([
  {
    path: '/',
    Component: GeneralLayout,
    children: [
      { path: `${Routes.HOME}`, Component: DashboardPage },
      { path: `${Routes.CLINIC_HISTORY}`, Component: ClinicHistoryPage },
      { path: `${Routes.MEDICAMENTS}`, Component: MedicamentsPage },
      { path: `${Routes.APPOINTMENTS}`, Component: AppointmentsPage },
      { path: `${Routes.EXAMS}`, Component: ExamsPage },
      {
        index: true,
        path: '/',
        Component: () => <Navigate to={`/${Routes.HOME}`} />,
      },
    ],
  },
  {
    path: '*',
    Component: () => <div>404 not found!</div>,
  },
]);

export default router;
