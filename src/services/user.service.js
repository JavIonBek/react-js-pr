import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8000/api/';

class UserService {
  getAll() {
    return axios.get(API_URL + 'comps', { headers: authHeader() });
  }

  get(id) {
    return axios.get(API_URL + `comps/${id}`, { headers: authHeader() });
  }

  create(data) {
    return axios.post(API_URL + 'comps', data, { headers: authHeader() });
  }

  update(id, data) {
    return axios.put(API_URL + `comps/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return axios.delete(API_URL + `comps/${id}`, { headers: authHeader() });
  }

  deleteAll() {
    return axios.delete(API_URL + `comps`, { headers: authHeader() });
  }
}

export default new UserService();
