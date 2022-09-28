import axios from 'axios';

export const createClient = () =>
  axios.create({
    baseURL: `https://layer.bicyclesharing.net`,
    validateStatus: () => true,
  });
