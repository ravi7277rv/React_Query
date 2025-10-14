import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5500",
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    //optionaly catch errors and add addtitional legging here
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
