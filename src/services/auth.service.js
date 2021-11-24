import axios from "axios";

const API_URL = "http://localhost:8000/api/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "token/obtain/", {
        username,
        password
      })
      .then(response => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          axios.defaults.headers['Authorization'] = "JWT " + response.data.access;
        }

        return response.data;
      })
  }

  isLoggedIn() {
    const user = JSON.parse(localStorage.getItem('user'));
    return !!user;
  }

  logout() {
    localStorage.removeItem("user");
  }

  signup(username, email, password, factory_type) {
    return axios.post(API_URL + "user/create/", {
      username,
      email,
      password,
      factory_type
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
