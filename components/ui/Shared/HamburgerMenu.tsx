import { HiBars3 } from 'react-icons/hi2';

type HamburgerMenuProps = {
  setSidebarOpen: (open: boolean) => void;
};

export default function HamburgerMenu({ setSidebarOpen }: HamburgerMenuProps) {
  return (
    <button
      type="button"
      onClick={() => setSidebarOpen(true)}
      className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
    >
      <span className="sr-only">Open sidebar</span>
      <HiBars3 aria-hidden="true" className="h-6 w-6" />
    </button>
  );
}
