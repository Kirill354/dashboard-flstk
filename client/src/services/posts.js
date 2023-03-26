import axios from 'axios';

const BASE_URL = 'http://localhost:4444/api';

export const postService = {
   getPosts: async () => {
      const { data } = await axios.get(`${BASE_URL}/posts`);
      return data;
   },
};
