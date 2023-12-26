import axios from "axios";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const useAxiosPublic = () => {
  return client;
};

export default useAxiosPublic;
