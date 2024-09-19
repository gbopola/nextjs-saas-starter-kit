import { FiCreditCard, FiHome, FiSettings } from 'react-icons/fi';
import { HiOutlineCog6Tooth, HiOutlineCreditCard } from 'react-icons/hi2';

export const dashboardConfig = {
  navigation: [
    { name: 'Dashboard', href: '/dashboard', icon: FiHome },
    {
      name: 'Billing',
      href: '/dashboard/billing',
      icon: FiCreditCard
    },
    {
      name: 'Settings',
      href: '/dashboard/settings',
      icon: FiSettings
    }
  ],
  userNavigation: [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' }
  ]
};
