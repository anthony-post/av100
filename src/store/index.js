import Vue from "vue";
import Vuex from "vuex";
import { userModule } from "./modules/userModule.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule: {
      namespaced: true,
      ...userModule,
    },
  },
});
