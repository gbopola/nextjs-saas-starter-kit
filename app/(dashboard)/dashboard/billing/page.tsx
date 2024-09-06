import React from 'react';

const BillingPage = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight mb-1 text-gray-900">
          Billing
        </h1>
        <p className="text-gray-600">Manage your billing plans here.</p>
      </div>
      <div className="bg-white border sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-base font-semibold leading-6 text-gray-900">
            Manage subscription
          </h2>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>
              You are currently on the{' '}
              <span className="font-semibold">Hobby</span> plan.
            </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Change plan
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Your plan renews on January 8, 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
