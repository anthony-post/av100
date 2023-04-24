import { entityApi } from "@/api/entityApi";

export const userModule = {
  namespaced: true,

  state: {
    userData: {},
  },

  mutations: {
    SET_USER_DATA_TO_STATE: (state, userData) => {
      state.userData = userData.data;
    },
    SET_USER_COMPANYNAME_TO_STATE: (state, newCompanyName) => {
      state.userData.companyname = newCompanyName;
    },
    SET_USER_LOGIN_TO_STATE: (state, newLogin) => {
      state.userData.login = newLogin;
    },
    SET_USER_PHONE_TO_STATE: (state, newPhone) => {
      state.userData.phone = newPhone;
    },
    SET_USER_FIRST_NAME_TO_STATE: (state, newFirstName) => {
      state.userData.fname = newFirstName;
    },
    SET_USER_LAST_NAME_TO_STATE: (state, newLastName) => {
      state.userData.lname = newLastName;
    },
    SET_USER_NOTIFY_TYPE_TO_STATE: (state, newNotifyType) => {
      state.userData.sendMethod = newNotifyType;
    },
    SET_USER_EMAIL_TO_STATE: (state, newEmail) => {
      state.userData.email = newEmail;
    },
  },

  actions: {
    async GET_USER_DATA_BY_ID_FROM_API({ commit }, userId) {
      const userData = await entityApi.getUserDataById(userId);
      commit("SET_USER_DATA_TO_STATE", userData);
    },
  },
};
