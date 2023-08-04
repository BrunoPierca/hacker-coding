import axios from "axios";

const instancesData = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const publicAxiosInstance = axios.create(instancesData);
