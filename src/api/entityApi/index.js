import { ApiInstance } from "@/api";

const apiKey = `api_key=${process.env.VUE_APP_X_API_KEY}`;

const UrlEntity = {
  user: "user",
};

export const entityApi = {
  getUserDataById(userId) {
    return ApiInstance.get(`${UrlEntity.user}/${userId}?${apiKey}`);
  },
  putUserDataById(userId, data = {}) {
    return ApiInstance.put(`${UrlEntity.user}/${userId}`, {
      ...data,
    });
  },
};
