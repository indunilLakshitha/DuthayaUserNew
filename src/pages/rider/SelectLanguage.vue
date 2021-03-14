<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <strong id="title">Select Language</strong>
        <p>Select the language for the rider app</p>
        <ion-button expand="full" router-link="/hellothere">Sinhala</ion-button>
        <ion-button router-link="/hellothere" expand="full" color=#ffffff id="eng">English</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script scope>
import {
  IonContent,
  //   IonHeader,
  IonPage,
//   IonTitle,
  IonButton,
  //   IonToolbar,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    // IonHeader,
    IonButton,
    IonPage,
    // IonTitle,
    // IonToolbar,
  },
});
</script>

<style scoped>
* {
  font-family: inter;
}
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
  margin-bottom: 50px;
}
#container a {
  text-decoration: none;
}
ion-button {
  height: 50px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
}
#title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  padding-bottom: 5px;
}
#eng{
    color: #2D81FF;
}

</style>