// 'use client';

// import React from 'react';
// import { useGetDashboardData } from '../hooks/useGetUsers';
// import FoodItemsChart from '../components/CategoriesChart';
// import ActiveUsersChart from '../components/Userchart';
// import Sidebar from '../Sidebar/page';

// const DashboardOverview = () => {
//   const { metrics, isLoading, error } = useGetDashboardData();

//   if (isLoading) return <p>Loading ...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   const totalFoodItems = metrics?.TotalFoodItems ?? 0;
//   const totalUsers = metrics?.TotalUsers ?? 0;

//   return (
//     <div className="ml-48 flex flex-col mt-4 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row gap-4 mb-4">
//         <div className="w-full lg:w-1/2">
//           <div className="bg-[#f59e0b] text-white text-center text-sm sm:text-base md:text-lg font-bold p-2 rounded-lg shadow-md w-full h-16 sm:h-20 mb-2">
//             Total Food Items: {totalFoodItems}
//           </div>
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 border border-gray-200 rounded-lg overflow-hidden">
//             <FoodItemsChart />
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2">
//           <div className="bg-[#f59e0b] text-white text-center text-sm sm:text-base md:text-lg font-bold p-2 rounded-lg shadow-md w-full h-16 sm:h-20 mb-2">
//             Total Users: {totalUsers}
//           </div>
//           <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 border border-gray-200 rounded-lg overflow-hidden">
//             <ActiveUsersChart />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => (
//   <div className="flex flex-col lg:flex-row">
//     <Sidebar />
//     <div className="flex-grow">
//       <DashboardOverview />
//     </div>
//   </div>
// );

// export default Dashboard;




// 'use client';
// import React from 'react';
// import { useGetDashboardData } from '../hooks/useGetUsers';
// import FoodItemsChart from '../components/CategoriesChart';
// import ActiveUsersChart from '../components/Userchart';
// import Sidebar from '../Sidebar/page';

// const DashboardOverview = () => {
//   const { metrics, isLoading, error } = useGetDashboardData();

//   if (isLoading) {
//     return <p>Loading ...</p>;
//   }
//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   const totalFoodItems = metrics?.TotalFoodItems ?? 0;
//   const totalUsers = metrics?.TotalUsers ?? 0;

//   return (
//     <div className="mt-12 ml-[350px]">
//       <div className="flex gap-16 mt-10 nesthub:mt-[8px] nesthub:ml-[18px] nesthubmax:mt-[12px] nesthub:gap-[24px] nesthubmax:ml-8 nesthubmax:gap-20 2xl:ml-64 2xl:gap-72">
//         <div className="bg-[#FF7F50] text-white text-center text-[24px] font-bold p-6 rounded-lg shadow-md w-[400px] h-[200px]
//           nesthub:w-[190px] nesthub:h-[100px] nesthub:text-[16px]
//           nesthubmax:w-[100px] nesthubmax:h-[80px] nesthubmax:text-[20px] 2xl:w-[500px] 2xl:h-[300px] 2xl:text-[32px] ipa:w-[70] ipa:mr-2  ipa:h-[30]">
//           Total Food Items: {totalFoodItems}
//         </div>
//         <div className="bg-[#FF7F50] text-white text-center text-[24px] font-bold p-6 rounded-lg shadow-md w-[400px]
//           nesthub:w-[190px] nesthub:h-[100px] nesthub:text-[16px]
//           nesthubmax:w-[230px] nesthubmax:h-[130px] nesthubmax:text-[20px] 2xl:w-[500px] 2xl:h-[300px] 2xl:text-[32px]">
//           Total Users: {totalUsers}
//         </div>
//       </div>
//       <div className="ml-20 mt-8 nesthubmax:ml-3 nesthub:ml-1 flex 2xl:ml-8 2xl:mr-44 2xl:mt-36 nesthub:flex-row ipm:flex-col-reverse ipa:flex-col-reverse ipa:mb-42 ipa:gap-0 " >
//         <div className="w-[100%] nesthub:w-[100%] nesthubmax:w-[100%] 2xl:w-[100%] ipa:mb-22 nesthub:flex-row">
//           <FoodItemsChart data={metrics?.foodItemsData} />
//         </div>
//         <div className="w-[100%] nesthub:w-[100%] nesthubmax:w-[100%] 2xl:w-[100%] ipa:mb-22 nesthub:flex-row">
//           <ActiveUsersChart data={metrics?.activeUsersData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const Dashboard = () => (
//   <div className="flex flex-col lg:flex-row">
//     <Sidebar />
//     <div className="flex-grow">
//       <DashboardOverview />
//     </div>
//   </div>
// );

// export default Dashboard;


'use client';
import React from 'react';
import { useGetDashboardData } from '../hooks/useGetUsers';
import FoodItemsChart from '../components/CategoriesChart/page';
import ActiveUsersChart from '../components/Userchart/page';
import Sidebar from '../Sidebar/page';
import FoodCategoryPieChart from '../components/pie-chart';

const DashboardOverview = () => {
  const { metrics, isLoading, error } = useGetDashboardData();

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const totalFoodItems = metrics?.TotalFoodItems ?? 0;
  const totalUsers = metrics?.TotalUsers ?? 0;

  return (
    <div className="mt-12 ml-[50px]">
      {/* Card Section */}
      <div className="flex gap-16 mt-10 justify-between">
        {/* Total Food Items Card */}
        <div className="bg-[#FF7F50] text-white text-center text-[24px] font-bold p-6 rounded-lg shadow-md w-[400px] h-[200px]
          nesthub:w-[190px] nesthub:h-[100px] nesthub:text-[16px]
          nesthubmax:w-[100px] nesthubmax:h-[80px] nesthubmax:text-[20px] 
          2xl:w-[500px] 2xl:h-[200px] 2xl:text-[32px] ml-[500px] ">
          Total Food Items: {totalFoodItems }
        </div>
      
      </div>

      {/* Chart Section */}
      <div className="flex gap-10 justify-between mt-10">
        {/* Food Items Chart */}
        <div className="w-[48%]">
          <FoodItemsChart data={metrics?.foodItemsData} />
        </div>
        {/* Active Users Chart */}

        {/* <div className="w-[48%]">
          <ActiveUsersChart data={metrics?.activeUsersData} />
        </div> */}

        <div>
          <FoodCategoryPieChart/>
        </div>

      </div>
    </div>
  );
};

const Dashboard = () => (
  <div className="flex flex-col lg:flex-row">
    <Sidebar />
    <div className="flex-grow">
      <DashboardOverview />
    </div>
  </div>
);

export default Dashboard;
