import axios from "axios";
import cookie from "js-cookie";

type deleteProps = {
  id: string;
};

export const deleteMyQuestion = async ({ id }: deleteProps) => {
  const jwt = cookie.get("questions_app_jwt");

  const headers = {
    authorization: jwt,
  };

  const response = await axios.delete(
    `${process.env.SERVER_URL}/question/${id}`,
    { headers }
  );

  return response;
};

export const deleteAnswer = async ({ id }: deleteProps) => {
  const jwt = cookie.get("questions_app_jwt");

  const headers = {
    authorization: jwt,
  };

  const response = await axios.delete(
    `${process.env.SERVER_URL}/answer/${id}`,
    { headers }
  );

  return response;
};
