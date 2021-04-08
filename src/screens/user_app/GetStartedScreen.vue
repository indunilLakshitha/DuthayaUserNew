<template>
  <BaseLayout pageTitle="" page_default_back_link="/otp">
    <div class="container">
      <h1 class="ion-text-center"><b>Let's Get Started</b></h1>
      <p class="ion-text-center">
        Enter your first and last name <br />
        to continue
      </p>

      <form class="ion-padding">
        <ion-input v-model="FirstName" type="text"></ion-input>
        <br />
        <ion-input v-model="LastName" type="text"></ion-input>

        {{ FirstName }}

        <p>
          <ion-checkbox
            color="dark"
            id="aggreed"
            checked="true"
            v-model="checkbox_value"
          ></ion-checkbox>
          I Agree to the
          <a href="" style="text-decoration: none">Terms and Conditions</a>
         
        </p>
      </form>
      <ion-button expand="full" id="btn" @click="register()">Next</ion-button>
    </div>
  </BaseLayout>
</template>

<script>
import { IonCheckbox, IonButton,IonInput } from "@ionic/vue";
import axios from "axios";
import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;
export default {
  components: {
    IonCheckbox,
    IonButton,
    IonInput
  },
  data() {
    return {
      FirstName: 'asaas',
      LastName: '',
      Token: '',
      checkbox_value: null,
    };
  },
  created() {
    this.getObject();
  },
  methods: {
    register() {
      console.log(this.FirstName);
      console.log(this.LastName);
      console.log(this.Token);
      // axios.defaults.headers = {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      //   Authorization: "Bearer " + this.Token,
      // };
      // axios
      //   .put(this.$router.options.URL + "otp/update/user", {
      //     first_name: this.FirstName,
      //     last_name: this.LastName,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //     // this.setObject()
        
      //   });
    },
    async getObject() {
      const ret = await Storage.get({ key: "TOKEN" });
      const user = JSON.parse(ret.value);
      this.Token = user.token;
      console.log(this.Token)
    },
    async setObject(f_name,l_name) {
      await Storage.set({
        key: "PROFILE",
        value: JSON.stringify({
          id: 3,
          first_name: f_name,
          last_name: l_name,
        }),
      });
     
    },
  },
};
</script>

<style>
.container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-input {
  height: 50px;
  width: 93%;
  background: #ffffff;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>