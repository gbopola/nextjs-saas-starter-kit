import {
  HiCalendar,
  HiChartPie,
  HiDocumentDuplicate,
  HiFolder,
  HiHome,
  HiUsers
} from 'react-icons/hi2';

export const navigation = [
  { name: 'Dashboard', href: '#', icon: HiHome, current: true },
  { name: 'Team', href: '#', icon: HiUsers, current: false },
  { name: 'Projects', href: '#', icon: HiFolder, current: false },
  { name: 'Calendar', href: '#', icon: HiCalendar, current: false },
  { name: 'Documents', href: '#', icon: HiDocumentDuplicate, current: false },
  { name: 'Reports', href: '#', icon: HiChartPie, current: false }
];
export const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false }
];
export const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' }
];
