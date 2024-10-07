import DashboardIcon from '@/public/bar-chart-square-02.svg';
import SettingsIcon from '@/public/settings-01.svg';
import CreditCardIcon from '@/public/credit-card-01.svg';

export const dashboardConfig = {
  navigation: [
    { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
    {
      name: 'Billing',
      href: '/dashboard/billing',
      icon: CreditCardIcon
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: SettingsIcon
    }
  ]
};
