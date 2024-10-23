// 'use client';
// import { useEffect, useState } from 'react';
// import ActiveUsersChart from '../components/Userchart/page';
// import { Sidebar } from 'lucide-react';


// interface User {
//   id: number;
//   first_name: string;
//   last_name: string;
//   email: string;
// }

// const RegisteredUsersTable = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(true);
//   const usersPerPage = 15; // Number of users to display per page

//   // Fetch users from the API
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://dishhub-2ea9d6ca8e11.herokuapp.com/api/users/register/');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data); // Assuming data is an array of users
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   // Calculate total pages
//   const totalPages = Math.ceil(users.length / usersPerPage);

//   // Get current users based on the current page
//   const indexOfLastUser = currentPage * usersPerPage;
//   const indexOfFirstUser = indexOfLastUser - usersPerPage;
//   const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

//   // Handle next and previous page changes
//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading users...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//           <ActiveUsersChart/>
          
//       <h1 className="text-2xl font-bold mb-4">Registered Users</h1>

//       <table className="min-w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border border-gray-300 p-2">First Name</th>
//             <th className="border border-gray-300 p-2">Last Name</th>
//             <th className="border border-gray-300 p-2">Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentUsers.map(user => (
//             <tr key={user.id}>
//               <td className="border border-gray-300 p-2">{user.first_name}</td>
//               <td className="border border-gray-300 p-2">{user.last_name}</td>
//               <td className="border border-gray-300 p-2">{user.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
//           onClick={handlePrevPage}
//           disabled={currentPage === 1}
//         >
//           Previous
//         </button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button
//           className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
//           onClick={handleNextPage}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RegisteredUsersTable;



'use client';
import { useEffect, useState } from 'react';
import ActiveUsersChart from '../components/Userchart/page';
import { Sidebar } from 'lucide-react';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

const RegisteredUsersTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const usersPerPage = 15; // Number of users to display per page

  // Fetch users from the API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dishhub-2ea9d6ca8e11.herokuapp.com/api/users/register/');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data); // Assuming data is an array of users
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  // Get current users based on the current page and filter out those with missing fields
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users
    .filter(user => user.first_name && user.last_name && user.email) // Filter out users with missing fields
    .slice(indexOfFirstUser, indexOfLastUser);

  // Handle next and previous page changes
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <ActiveUsersChart/>
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">First Name</th>
            <th className="border border-gray-300 p-2">Last Name</th>
            <th className="border border-gray-300 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map(user => (
              <tr key={user.id}>
                <td className="border border-gray-300 p-2">{user.first_name}</td>
                <td className="border border-gray-300 p-2">{user.last_name}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="border border-gray-300 p-2 text-center">No users to display</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RegisteredUsersTable;

