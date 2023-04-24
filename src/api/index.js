import axios from "axios";

const instanceConfig = {
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "X-Api-Key": process.env.VUE_APP_X_API_KEY,
    "X-User-Token": process.env.VUE_APP_X_USER_TOKEN,
    "X-Device-OS": process.env.VUE_APP_X_DEVICE_OS,
    "Content-Type": "application/json",
  },
};

export const ApiInstance = axios.create(instanceConfig);
