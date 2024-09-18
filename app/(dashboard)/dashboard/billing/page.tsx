import { DashboardHeader } from '@/components/Shared';
import { BillingCard } from '@/components/ui/Billing';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Billing',
  description: 'Manage your billing information.'
};

const BillingPage = () => {
  return (
    <div>
      <DashboardHeader
        title="Billing"
        description="Manage your billing information."
      />
      <BillingCard />
    </div>
  );
};

export default BillingPage;
