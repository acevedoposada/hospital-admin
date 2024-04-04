import {
  CalendarRtlFilled,
  CalendarRtlRegular,
  CertificateFilled,
  CertificateRegular,
  ClipboardBulletListLtrFilled,
  ClipboardBulletListLtrRegular,
  FluentIcon,
  HomeFilled,
  HomeRegular,
  PillFilled,
  PillRegular,
} from '@fluentui/react-icons';
import { Routes } from './routes';

export interface NavItemType {
  Icon: FluentIcon;
  ActiveIcon: FluentIcon;
  title: string;
  route: Routes;
}

export const navItems: Record<Routes, NavItemType> = {
  [Routes.HOME]: {
    title: 'Inicio',
    Icon: HomeRegular,
    ActiveIcon: HomeFilled,
    route: Routes.HOME,
  },
  [Routes.APPOINTMENTS]: {
    title: 'Citas',
    Icon: CalendarRtlRegular,
    ActiveIcon: CalendarRtlFilled,
    route: Routes.APPOINTMENTS,
  },
  [Routes.MEDICAMENTS]: {
    title: 'Medicamentos',
    Icon: PillRegular,
    ActiveIcon: PillFilled,
    route: Routes.MEDICAMENTS,
  },
  [Routes.EXAMS]: {
    title: 'Exámenes',
    Icon: CertificateRegular,
    ActiveIcon: CertificateFilled,
    route: Routes.EXAMS,
  },
  [Routes.CLINIC_HISTORY]: {
    title: 'Historia Clínica',
    Icon: ClipboardBulletListLtrRegular,
    ActiveIcon: ClipboardBulletListLtrFilled,
    route: Routes.CLINIC_HISTORY,
  },
};
