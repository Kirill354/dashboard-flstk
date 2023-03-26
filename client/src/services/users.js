import axios from 'axios';

const BASE_URL = 'http://localhost:4444/api';

export const userService = {
   getUsers: async () => {
      const { data } = await axios.get(`${BASE_URL}/users`);
      return data;
   },
   deleteUser: async (id) => {
      await axios.delete(`${BASE_URL}/users/${id}`);
   },
   createUser: async (user) => {
      const { data } = await axios.post(`${BASE_URL}/users`, user);
      console.log(data);
   },
};
