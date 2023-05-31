import api from "../api";

const Login = (data) => {
  return api.post("/authentication_token", data);
};

const Me = (data) => {
  return api.get('/api/me', data)
}

const RefreshToken = (data) => {
  return api.get('/api/refresh_token', data)
}

const AuthServices = {
  Login,
  Me,
  RefreshToken
};

export default AuthServices;
