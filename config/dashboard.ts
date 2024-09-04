import { HiCog6Tooth, HiCreditCard, HiHome } from 'react-icons/hi2';

export const dashboardConfig = {
  navigation: [
    { name: 'Dashboard', href: '/dashboard', icon: HiHome },
    {
      name: 'Billing',
      href: '/dashboard/billing',
      icon: HiCreditCard
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: HiCog6Tooth
    }
  ],
  userNavigation: [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' }
  ]
};
