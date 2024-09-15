import DashboardHeader from '@/components/Shared/DashboardHeader';
import { BillingCard } from '@/components/ui/Billing';
import React from 'react';

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
