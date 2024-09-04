import React from 'react';

const BillingPage = () => {
  return (
    // <div>
    //   <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900">
    //     Billing
    //   </h1>
    //   <p className="text-gray-600 mt-1">Manage your billing plans here.</p>
    //   <div className="overflow-hidden rounded-lg border mt-7">
    //     <div className="px-4 py-5 sm:p-6">
    //       <h2 className="font-semibold text-gray-900">Your Plan</h2>
    //       <p className="text-gray-600 mb-4">
    //         You are currently on the Hobby plan.
    //       </p>
    //       <p className="font-semibold text-xl mb-3 text-gray-900">$10/month</p>
    //       <div className="flex justify-between items-center mt-5">
    //         <button
    //           type="button"
    //           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //         >
    //           Change Plan
    //         </button>
    //         <p className="text-sm text-gray-600">
    //           Your plan renews of January 8, 2024.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900">
        Billing
      </h1>
      <p className="text-gray-600 mt-1 mb-6">Manage your billing plans here.</p>
      <div className="overflow-hidden rounded-lg bg-white shadow">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="font-semibold text-gray-900">Your Plan</h2>
          <p className="text-gray-600 mb-4">
            You are currently on the Hobby plan.
          </p>
          <p className="font-medium text-xl text-gray-900">$10/month</p>
        </div>
        <div className="bg-gray-50 px-4 py-4 sm:px-6">
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Change Plan
            </button>
            <p className="text-sm text-gray-600">
              Your plan renews of January 8, 2024.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
