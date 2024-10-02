// const usersApi = `${process.env.BASE_URL}/api/numberUsers`; 

// export const fetchUsers = async (month?: string) => {
//   try {
//     let apiUrl = usersApi;
//     if (month) {
//       apiUrl += `?month=${month}`;
//     }

//     console.log('API URL:', apiUrl); 

//     const response = await fetch(apiUrl);
//     if (!response.ok) {
//       throw new Error('Failed to fetch users');
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

const usersApi =' /api/numberUsers/'; 

export const fetchUsers= async () => {
  try {
    const response = await fetch(`${usersApi}`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};