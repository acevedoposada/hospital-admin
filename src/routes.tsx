import { Navigate, createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import { GeneralLayout, AppointmentsLayout } from 'layouts';
import { Routes } from 'constants/routes';

const DashboardPage = lazy(
  () => import('modules/pages/dashboard/dashboard.page')
);
const ClinicHistoryPage = lazy(
  () => import('modules/pages/clinic-history/clinic-history.page')
);
const MedicamentsPage = lazy(
  () => import('modules/pages/medicaments/medicaments.page')
);
const ScheduledAppointmentsPage = lazy(
  () => import('modules/pages/appointments/pages/scheduled/scheduled.page')
);
const ScheduleAppointmentPage = lazy(
  () => import('modules/pages/appointments/pages/schedule/schedule.page')
);
const ExamsPage = lazy(() => import('modules/pages/exams/exams.page'));

const router = createBrowserRouter([
  {
    path: '/',
    Component: GeneralLayout,
    children: [
      { path: `${Routes.HOME}`, Component: DashboardPage },
      { path: `${Routes.CLINIC_HISTORY}`, Component: ClinicHistoryPage },
      { path: `${Routes.MEDICAMENTS}`, Component: MedicamentsPage },
      {
        path: `${Routes.APPOINTMENTS}`,
        Component: AppointmentsLayout,
        children: [
          {
            path: Routes.SCHEDULED_APPOINTMENTS,
            Component: ScheduledAppointmentsPage,
          },
          {
            path: Routes.SCHEDULE_APPOINTMENT,
            Component: ScheduleAppointmentPage,
          },
          {
            index: true,
            path: '',
            Component: () => (
              <Navigate
                to={`/${Routes.APPOINTMENTS}/${Routes.SCHEDULED_APPOINTMENTS}`}
              />
            ),
          },
        ],
      },
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
