<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script >
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
  },
  data() {
    return {
      // UserProfile:'dsf'
    };
  },
  methods: {
    async getObject() {
      const ret = await Storage.get({ key: "PROFILE" });
      const user = JSON.parse(ret.value);
      this.UserProfile = user.UserProfile;
      console.log(this.UserProfile);
    },
  },
  created() {
    // this.getObject()
  },
});
</script>