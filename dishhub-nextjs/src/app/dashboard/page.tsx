"use client";
import React from "react";
import { useGetDashboardData } from "../hooks/useGetUsers";
import FoodItemsChart from "../components/CategoriesChart";
import ActiveUsersChart from "../components/Userchart";

const Dashboard = () => {
  const { metrics, isLoading, error } = useGetDashboardData("2024-10");

  return (
    <div className="w-full bg-gray-50 h-screen overflow-hidden"> 
      <div className="max-w-[2000px] mx-auto p-4 space-y-8 h-full">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-xl">Loading ...</p>
          </div>
        ) : error ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-xl text-red-500">Error: {error.message}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-44 mb-48">
              <div className="bg-[#FF7F50] text-white rounded-xl p-6 h-[200px] shadow-sm mt-20"> 
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Total Food Items</h2>
                <p className="text-4xl md:text-5xl font-bold">{metrics.TotalFoodItems ?? 0}</p>
              </div>
              <div className="bg-[#FF7F50] text-white rounded-xl p-6 h-[200px] shadow-sm mt-20"> 
                <h2 className="text-2xl md:text-3xl font-bold mb-2">Total Users</h2>
                <p className="text-4xl md:text-5xl font-bold">{metrics.TotalUsers ?? 0}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 mt-12 h-full"> 
              <div className="bg-white rounded-xl shadow-sm flex flex-col h-full"> 
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Food Items by Category</h3>
                <div className="flex-1">
                  <FoodItemsChart  />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm flex flex-col h-full"> 
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Active Users by Month</h3>
                <div className="flex-1">
                  <ActiveUsersChart   />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
