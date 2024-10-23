// // App.js
// 'use client'
// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// // Initialize Chart.js components
// ChartJS.register(ArcElement, Tooltip, Legend);

// // Mock fetchCategories function to simulate API fetching
// const fetchCategories = async (category) => {
//   // Replace this mock data with actual API calls to get real data
//   const mockData = {
//     vegetables: [{ name: 'Carrot' }, { name: 'Broccoli' }, { name: 'Spinach' }],
//     fruits: [{ name: 'Apple' }, { name: 'Banana' }],
//     grains: [{ name: 'Wheat' }, { name: 'Rice' }, { name: 'Oats' }, { name: 'Barley' }],
//     dairy: [{ name: 'Milk' }, { name: 'Cheese' }, { name: 'Butter' }],
//   };
  
//   return mockData[category] || [];
// };

// // Function to fetch the number of items in each category
// const fetchCategoryData = async () => {
//   try {
//     // Fetching the number of items for each category
//     const vegetables = await fetchCategories('vegetables');
//     const fruits = await fetchCategories('fruits');
//     const grains = await fetchCategories('grains');
//     const dairy = await fetchCategories('dairy');

//     // Returning the count of items in each category
//     return {
//       vegetables: vegetables.length,
//       fruits: fruits.length,
//       grains: grains.length,
//       dairy: dairy.length,
//     };
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return {
//       vegetables: 0,
//       fruits: 0,
//       grains: 0,
//       dairy: 0,
//     };
//   }
// };

// // Main Pie Chart component
// const FoodCategoryPieChart = () => {
//   const [categoryData, setCategoryData] = useState({
//     vegetables: 0,
//     fruits: 0,
//     grains: 0,
//     dairy: 0,
//   });

//   // Fetch category data on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetchCategoryData();
//       setCategoryData(data);
//     };
//     fetchData();
//   }, []);

//   // Data for the pie chart
//   const data = {
//     labels: ['Vegetables', 'Fruits', 'Grains', 'Dairy'],
//     datasets: [
//       {
//         label: '# of Food Items',
//         data: [
//           categoryData.vegetables,
//           categoryData.fruits,
//           categoryData.grains,
//           categoryData.dairy,
//         ],
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2>Food Items in Each Category</h2>
//       <Pie data={data} />
//     </div>
//   );
// };

// // App component where we render the Pie Chart
// const App = () => {
//   return (
//     <div>
//       <h1>Food Category Dashboard</h1>
//       <FoodCategoryPieChart />
//     </div>
//   );
// };

// export default App;



// App.js
'use client'
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Initialize Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Mock fetchCategories function to simulate API fetching
const fetchCategories = async (category) => {
  // Replace this mock data with actual API calls to get real data
  const mockData = {
    vegetables: [{ name: 'Carrot' }, { name: 'Broccoli' }, { name: 'Spinach' }],
    fruits: [{ name: 'Apple' }, { name: 'Banana' }],
    grains: [{ name: 'Wheat' }, { name: 'Rice' }, { name: 'Oats' }, { name: 'Barley' }],
    dairy: [{ name: 'Milk' }, { name: 'Cheese' }, { name: 'Butter' }],
  };
  
  return mockData[category] || [];
};

// Function to fetch the number of items in each category
const fetchCategoryData = async () => {
  try {
    // Fetching the number of items for each category
    const vegetables = await fetchCategories('vegetables');
    const fruits = await fetchCategories('fruits');
    const grains = await fetchCategories('grains');
    const dairy = await fetchCategories('dairy');

    // Returning the count of items in each category
    return {
      vegetables: vegetables.length,
      fruits: fruits.length,
      grains: grains.length,
      dairy: dairy.length,
    };
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      vegetables: 0,
      fruits: 0,
      grains: 0,
      dairy: 0,
    };
  }
};

// Main Pie Chart component
const FoodCategoryPieChart = () => {
  const [categoryData, setCategoryData] = useState({
    vegetables: 0,
    fruits: 0,
    grains: 0,
    dairy: 0,
  });

  // Fetch category data on component mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategoryData();
      setCategoryData(data);
    };
    fetchData();
  }, []);

  // Data for the pie chart
  const data = {
    labels: ['Vegetables', 'Fruits', 'Grains', 'Dairy'],
    datasets: [
      {
        label: '# of Food Items',
        data: [
          categoryData.vegetables,
          categoryData.fruits,
          categoryData.grains,
          categoryData.dairy,
        ],
        backgroundColor: ['#008000', '#FFA500', '#8B4513', '#FF7F50'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className='mr-60 mb-48' style={{ width: '500px', height: '500px'  }}>
      <h2>Food Items in Each Category</h2>
      <Pie data={data} />
    </div>
  );
};

export default FoodCategoryPieChart;







// App component where we render the Pie Chart
// const App = () => {
//   return (
//     <div>
//       <h1>Food Category Dashboard</h1>
//       <FoodCategoryPieChart />
//     </div>
//   );
// };

// export default App;

