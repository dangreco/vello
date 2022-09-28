import axios from 'axios';
import { Language } from './types';

export const createClient = (language: Language) =>
  axios.create({
    baseURL: `https://gbfs.velobixi.com/gbfs/${language}`,
    validateStatus: () => true,
  });
