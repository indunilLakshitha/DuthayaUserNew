<template>
  <base-layout>
    <ion-button id="backtop" router-link="/online">
      <ion-icon :icon="arrowBackOutline"></ion-icon>
    </ion-button>

    <ion-list lines="none">
      <ion-item>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#ECEEF7" />
          <path
            d="M17.361 6.54547H14.0627L14.3354 18.8693H17.0797L17.361 6.54547ZM15.7076 24.1875C16.7133 24.1875 17.5741 23.3523 17.5826 22.3125C17.5741 21.2898 16.7133 20.4546 15.7076 20.4546C14.6678 20.4546 13.8241 21.2898 13.8326 22.3125C13.8241 23.3523 14.6678 24.1875 15.7076 24.1875Z"
            fill="#284D84"
          />
        </svg>
      </ion-item>
      <ion-item>
        <ion-text>
          <h2><b>Abort</b> Journey?</h2>
          <span id="sub">Tell us the reason for cancel</span>
        </ion-text>
      </ion-item>
      <ion-item></ion-item>
      <ion-item>
        <ion-checkbox color="dark"></ion-checkbox>
        <p>This task not what i registerd</p>
      </ion-item>
      <ion-item>
        <ion-checkbox color="dark"></ion-checkbox>
        <p>Client is out of mu regen</p>
      </ion-item>
      <ion-item>
        <ion-checkbox color="dark"></ion-checkbox>
        <p>Problem with vehicle</p>
      </ion-item>
      <ion-item>
        <ion-checkbox color="dark"></ion-checkbox>
        <p>Client asked to cancel task</p>
      </ion-item>
      <ion-item>
        <ion-checkbox color="dark"></ion-checkbox>
        <p>Other</p>
      </ion-item>
    </ion-list>
    <!-- <ion-row> -->
    <!-- <ion-col> -->
    <ion-button id="back" style="margin-top: 260px !important">
      <ion-icon :icon="arrowBackOutline"></ion-icon>
    </ion-button>
    <!-- </ion-col> -->
    <!-- <ion-col> -->
    <ion-button id="confirm" style="margin-top: 260px !important"
      >Confirm</ion-button
    >
    <!-- </ion-col> -->
    <!-- </ion-row> -->
  </base-layout>
</template>

<style scoped>
h2 {
  font-size: 24px;
}
span {
  color: #7e8794;
  font-size: 14px;
}
p {
  font-size: 14px;
  margin-left: 16px;
}
#back {
  /* position: fixed; */
  /* bottom: 10px;  */
  --background: #eceef7;
  height: 48px;
  width: 12%;
  left: 5px;
  --color: black;
}
#backtop {
  --background: null;
  --box-shadow: 0;
  --color: black;
}
#confirm {
  position: fixed;
  right: 5px;
  width: 85%;
  height: 48px;
}
</style>

<script>
import {
  IonList,
  IonItem,
  IonCheckbox,
  IonButton,
  IonText,
  IonIcon,
} from "@ionic/vue";
import { arrowForwardCircle, back, arrowBackOutline } from "ionicons/icons";
export default {
  components: {
    IonList,
    IonItem,
    IonCheckbox,
    IonButton,
    IonText,
    IonIcon,
  },
  setup() {
    return { arrowForwardCircle, back, arrowBackOutline };
  },
};
</script>