import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/' });

export enum EndPoints {
  sales = 'sales',
}

export default api;
