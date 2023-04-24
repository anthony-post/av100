<template>
  <v-main>
    <h2>Настройки</h2>
    <v-form>
      <v-row align="baseline">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2">
          <h3>Учетная запись</h3>
        </v-col>
        <v-col class="form__pretext" :lg="1" :md="2" :sm="2" :cols="3">
          <span>Компания</span>
        </v-col>
        <v-col :lg="3" :md="4" :sm="6" :cols="6">
          <v-text-field
            v-model="companyName"
            outlined
            :color="colorTextFieldActive"
            :rules="[rules.required, rules.counter]"
          />
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
      <v-row align="baseline">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2"></v-col>
        <v-col class="form__pretext" :lg="1" :md="2" :sm="2" :cols="3">
          <span>Логин</span>
        </v-col>
        <v-col :lg="3" :md="4" :sm="6" :cols="6">
          <v-text-field
            v-model="userLogin"
            outlined
            color="green"
            :rules="[rules.required, rules.counter]"
          />
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
      <v-row align="start">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2"></v-col>
        <v-col class="form__pretext" :lg="1" :md="2" :sm="2" :cols="3">
          <span>Номер телефона</span>
        </v-col>
        <v-col :lg="3" :md="4" :sm="6" :cols="6">
          <v-text-field
            v-model="userPhone"
            outlined
            color="green"
            :rules="[rules.required, rules.counter]"
          />
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
      <v-row align="baseline">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2"></v-col>
        <v-col class="form__pretext" :lg="1" :md="2" :sm="2" :cols="3">
          <span>Имя</span>
        </v-col>
        <v-col :lg="3" :md="4" :sm="6" :cols="6">
          <v-text-field
            v-model="userFirstName"
            outlined
            color="green"
            :rules="[rules.required, rules.counter]"
          />
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
      <v-row align="baseline">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2"></v-col>
        <v-col class="form__pretext" :lg="1" :md="2" :sm="2" :cols="3">
          <span>Фамилия</span>
        </v-col>
        <v-col :lg="3" :md="4" :sm="6" :cols="6">
          <v-text-field
            v-model="userLasttName"
            outlined
            color="green"
            hint="* Не обязательно"
            persistent-hint
            :rules="[rules.counter]"
          />
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>

      <v-row align="baseline">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2">
          <h3>Оповещения о новых подборках</h3>
        </v-col>
        <v-col class="form__title" :lg="4" :md="6" :sm="9" :cols="9">
          <span
            >Выберите, куда будут приходить уведомления при появлении
            автомобилей, которые подходят под критерии вашей подборки.</span
          >
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
      <v-row align="baseline">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2"></v-col>
        <v-col :lg="4" :md="6" :sm="9" :cols="9">
          <h4>Уведомления</h4>
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
      <v-row>
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2"></v-col>
        <v-col :lg="4" :md="6" :sm="9" :cols="9">
          <v-radio-group v-model="notifyType">
            <div
              v-for="item in notifyOptions"
              :key="item.id"
              class="notify-options"
            >
              <v-radio
                :label="item.notifytypestring"
                :value="item.sendMethod"
                color="black"
                class="radio-margin"
              >
              </v-radio>
              <div>
                <div v-if="item.notifyData">
                  <div v-if="!showTextFieldEmail">
                    <span>{{ userData.email }}</span>
                    <v-btn icon color="green" @click="showEmailToEdit"
                      ><v-icon>mdi-pencil</v-icon></v-btn
                    >
                  </div>
                  <v-text-field
                    v-else
                    v-model="userEmail"
                    outlined
                    color="green"
                    :rules="[rules.counter]"
                  >
                    {{ userData.email }}
                  </v-text-field>
                </div>
                <div v-else class="not-visible">not-visible</div>
              </div>
            </div>
          </v-radio-group>
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
      <v-row align="baseline">
        <v-col class="form__title" :lg="2" :md="2" :sm="2" :cols="2"> </v-col>
        <v-col :lg="4" :md="6" :sm="9" :cols="9">
          <v-btn color="success" @click="setNewUserData">Сохранить</v-btn>
        </v-col>
        <v-col :lg="6" :md="4" :sm="1" :cols="1"></v-col>
      </v-row>
    </v-form>
  </v-main>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { entityApi } from "@/api/entityApi";

export default {
  name: "Settings",
  data: () => ({
    //userId полученный при регистрации
    userId: "2020569",
    //валидация полей ввода от vuetify
    rules: {
      required: (value) => !!value || "Required.",
      counter: (value) => value.length <= 20 || "Max 20 characters",
    },
    notifyOptions: [
      {
        id: 1,
        notifytypestring: "Выкл",
        sendMethod: -1,
        notifytype: "-1",
        notifyData: false,
      },
      {
        id: 2,
        notifytypestring: "Email",
        sendMethod: 2,
        notifytype: "2",
        notifyData: true,
      },
    ],
    showTextFieldEmail: false,
    //цвет рамки для полей ввода
    colorTextFieldActive: "green",
  }),
  created() {
    this.GET_USER_DATA_BY_ID_FROM_API(this.userId);
  },
  computed: {
    ...mapState("userModule", {
      userData: (state) => state.userData,
    }),
    companyName: {
      get() {
        return Object.keys(this.userData).length !== 0
          ? this.userData.companyname
          : "";
      },
      set(newCompanyName) {
        this.$store.commit(
          "userModule/SET_USER_COMPANYNAME_TO_STATE",
          newCompanyName
        );
      },
    },
    userLogin: {
      get() {
        return Object.keys(this.userData).length !== 0
          ? this.userData.login
          : "";
      },
      set(newLogin) {
        this.$store.commit("userModule/SET_USER_LOGIN_TO_STATE", newLogin);
      },
    },
    userPhone: {
      get() {
        return Object.keys(this.userData).length !== 0
          ? this.userData.phone
          : "";
      },
      set(newPhone) {
        this.$store.commit("userModule/SET_USER_PHONE_TO_STATE", newPhone);
      },
    },
    userFirstName: {
      get() {
        return Object.keys(this.userData).length !== 0
          ? this.userData.fname
          : "";
      },
      set(newFirstName) {
        this.$store.commit(
          "userModule/SET_USER_FIRST_NAME_TO_STATE",
          newFirstName
        );
      },
    },
    userLasttName: {
      get() {
        return Object.keys(this.userData).length !== 0
          ? this.userData.lname
          : "";
      },
      set(newLastName) {
        this.$store.commit(
          "userModule/SET_USER_LAST_NAME_TO_STATE",
          newLastName
        );
      },
    },
    notifyType: {
      get() {
        return Object.keys(this.userData).length !== 0
          ? this.userData.sendMethod
          : "";
      },
      set(newNotifyType) {
        this.$store.commit(
          "userModule/SET_USER_NOTIFY_TYPE_TO_STATE",
          newNotifyType
        );
      },
    },
    userEmail: {
      get() {
        return Object.keys(this.userData).length !== 0
          ? this.userData.email
          : "";
      },
      set(newEmail) {
        this.$store.commit("userModule/SET_USER_EMAIL_TO_STATE", newEmail);
      },
    },
  },
  methods: {
    ...mapActions("userModule", ["GET_USER_DATA_BY_ID_FROM_API"]),
    showEmailToEdit() {
      this.showTextFieldEmail = !this.showTextFieldEmail;
    },
    //PUT запрос на изменение данных пользователя
    async setNewUserData() {
      await entityApi.putUserDataById(this.userId, {
        id: this.userId,
        login: this.userLogin,
        email: this.userEmail,
        telegramChat: "string",
        clicks: 0,
        expire: 0,
        autoru: 0,
        phone: this.userPhone,
        sendMethod: this.notifyType,
        lname: this.userLasttName,
        fname: this.userFirstName,
        timezone: "string",
        timezonestring: "string",
        notifytype: "string",
        notifytypestring: "string",
        companyid: 0,
        companyname: this.companyName,
        calltype: "string",
        enableaudio: true,
        locklentaupdate: true,
        erased: 0,
        os: "string",
        sipid: "string",
        updatePeriod: 0,
        filterMaxCount: 0,
        turbosip: "string",
        turbosip5accessto: "string",
        turbosip20accessto: "string",
        colorlenta: true,
        ignoreavg: true,
        redirecttarget: 0,
        lentacolortype: 0,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.form__title {
  @media #{$media} and (min-width: $xs-min) and (max-width: $xs-max) {
    display: none;
  }
}

.not-visible {
  visibility: hidden;
}

.notify-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}

.radio-margin {
  margin-bottom: 0 !important;
}
</style>
