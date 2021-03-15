<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <strong id="title"> Welcome </strong>
        <p>Enter OTP we sent to your phone</p>
        <!-- <p>+94 770 371671</p> -->
        <ion-lable @click="submit">{{ mobileNo }}</ion-lable>
        <table>
          <tr>
            <td>
              <ion-input
                v-model="otp_1"
                maxlength="1"
                type="number"
              ></ion-input>
            </td>
            <td>
              <ion-input
                v-model="otp_2"
                maxlength="1"
                type="number"
              ></ion-input>
            </td>
            <td>
              <ion-input
                v-model="otp_3"
                maxlength="1"
                type="number"
              ></ion-input>
            </td>
            <td>
              <ion-input
                v-model="otp_4"
                maxlength="1"
                @input="login"
                type="number"
              ></ion-input>
            </td>
          </tr>
        </table>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
* {
  font-family: inter;
}
ion-input {
  height: 50px;
  width: 75px;
  background: #ffffff;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;
  margin-right: 9px;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container p {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 5px;
}
#container a {
  text-decoration: none;
}

#title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  padding-bottom: 5px;
}
table {
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>



 <script>
import { IonPage, IonInput, IonContent, IonLabel } from "@ionic/vue";
import axios from "axios";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;
export default {
  components: {
    IonPage,
    IonInput,
    IonContent,
    IonLabel
  },
  data() {
    return {
      mobileNo: "",
      accountType: "",
      deviceName: "",
      otpCode: "",
      otp_1: "",
      otp_2: "",
      otp_3: "",
      otp_4: "",
      user_type: "",
    };
  },
  created() {
    this.getObject();
  },

  methods: {
    async getObject() {
      const ret = await Storage.get({ key: "OTP" });
      const user = JSON.parse(ret.value);
      this.mobileNo = user.mobile;
      this.otpCode = user.otp;
      this.user_type = user.type;
    },
    login() {
      // this.otpCode = this.otp_1 + this.otp_2 + this.otp_3 + this.otp_4;
      // console.log(this.otpCode);
      axios
        .post(this.$router.options.URL + "otp/login", {
          account_type: "User",
          mobile: this.mobileNo,
          device_name: "nokia",
          otp_code: this.otpCode,
        })
        .then((response) => {
          //  console.log(response.data.access_token)
          this.setObject(response.data.access_tocken);
        });
    },
    submit() {
      axios
        .post(this.$router.options.URL + "otp/login", {
          account_type: "User",
          mobile: this.mobileNo,
          device_name: "nokia",
          otp_code: this.otpCode,
        })
        .then((response) => {
          console.log(response.data.access_tocken);
          this.setObject(response.data.access_tocken);
        });
    },
    async setObject(token) {
      await Storage.set({
        key: "TOKEN",
        value: JSON.stringify({
          id: 2,
          token: token,
        }),
      });
      if (this.user_type == "new") {
        this.$router.push("get-started");
      } else if (this.user_type == "exist") {
        this.$router.push("main-1");
      }
    },
  },
};
</script>