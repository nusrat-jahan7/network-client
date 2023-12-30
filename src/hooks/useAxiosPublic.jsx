import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

const useAxiosPublic = () => {
  return client;
};

export default useAxiosPublic;
