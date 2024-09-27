import axios from "axios";
import cookie from "js-cookie";

type LoginProps = {
  email: string;
  password: string;
};

type RegisterProps = {
  name: string;
  email: string;
  password: string;
};

export const login = async ({ email, password }: LoginProps) => {
  const body = {
    email: email,
    password: password,
  };

  const response = await axios.post(`${process.env.SERVER_URL}/login`, body);
  return response;
};

export const register = async ({ name, email, password }: RegisterProps) => {
  const body = {
    name,
    email,
    password,
  };

  const response = await axios.post(`${process.env.SERVER_URL}/register`, body);

  if (response.status === 200) {
    cookie.set("user_name", name);
  }

  return response;
};

export const validateUse = async () => {
  const jwt = cookie.get("questions_app_jwt");

  const headers = {
    authorization: jwt,
  };

  const response = await axios.get(`${process.env.SERVER_URL}/login/validate`, {
    headers,
  });

  return response;
};
