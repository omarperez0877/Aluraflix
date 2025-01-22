import axios from 'axios';

const API_BASE_URL = 'https://678eee84a64c82aeb121b632.mockapi.io/api/v1';

export const fetchVideos = () => axios.get(`${API_BASE_URL}/videos`);
export const fetchCategories = () => axios.get(`${API_BASE_URL}/categories`);
export const deleteVideo = (id) => axios.delete(`${API_BASE_URL}/videos/${id}`);
export const updateVideo = (id, updatedData) =>
  axios.put(`${API_BASE_URL}/videos/${id}`, updatedData);
export const createVideo = (data) => {
    return axios.post(`${API_BASE_URL}/videos`, data);
  };
