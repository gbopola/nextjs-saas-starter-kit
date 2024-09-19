import Button from '../Button';

export default function BillingCard() {
  return (
    <div className="bg-white border border-gray-200 sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          Manage subscription
        </h2>
        <div className="mt-2 max-w-xl text-sm text-gray-600">
          <p>
            You are currently on the{' '}
            <span className="font-semibold">Hobby</span> plan.
          </p>
        </div>
        <div className="flex items-center justify-between mt-5">
          <a href="https://billing.stripe.com/p/login/test_00g6oF0Id9Um1mU288">
            <Button size="sm">Change plan</Button>
          </a>
          <p className="mt-2 text-sm text-gray-600">
            Your plan renews on January 8, 2024.
          </p>
        </div>
      </div>
    </div>
  );
}
