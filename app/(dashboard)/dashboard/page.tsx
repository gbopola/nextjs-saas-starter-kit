// 'use client';
// import {
//   DashboardMain,
//   DashboardMobileNav,
//   DashboardNav,
//   DashboardTopNav
// } from '@/components/ui/Shared';
// import { navigation, teams, userNavigation } from '@/config/dashboard';
// import { classNames } from '@/utils/helpers';
// import { useState } from 'react';

// export default function Example() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <>
//       <DashboardMobileNav
//         sidebarOpen={sidebarOpen}
//         setSidebarOpen={setSidebarOpen}
//         classNames={classNames}
//         teams={teams}
//         navigation={navigation}
//       />

//       <DashboardNav
//         classNames={classNames}
//         teams={teams}
//         navigation={navigation}
//       />

//       <div className="lg:pl-72">
//         <DashboardTopNav
//           setSidebarOpen={setSidebarOpen}
//           userNavigation={userNavigation}
//         />
//       </div>
//     </>
//   );
// }
export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
}
