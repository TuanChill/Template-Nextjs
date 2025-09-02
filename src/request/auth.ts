import { apiAxios } from '@/config/api-axios';
import { API_URL } from '@/constants/api';

export const getMe = async () => {
  const response = await apiAxios.get(`${API_URL.GET_ME}`);

  return response.data;
};
