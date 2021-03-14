<template>
  <base-layout>
    <ion-button id="backtop" router-link="/home">
      <ion-icon :icon="arrowBackOutline"></ion-icon>
    </ion-button>
    <ion-list>
      <ion-item>
        <p style="font-size: 22px">
          <b>Edit</b> Account <br />

          <span style="font-size: 12px; color: #0e1b2e"
            >Manage Your Profile Settings</span>
        </p>
      </ion-item>
      <ion-item>
        <ion-col size="2" id="dp"
          ><svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <circle cx="28" cy="28" r="28" fill="#C4C4C4" />
            <circle cx="28" cy="28" r="28" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0"
                  transform="translate(-0.252941) scale(0.0117647)"
                />
              </pattern>
              <image
                id="image0"
                width="128"
                height="85"
                xlink:href="data:image/jpeg;base64,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"
              />
            </defs></svg
        ></ion-col>
      </ion-item>

      <ion-grid style="margin-left: 10px; margin-right: 10px; margin-top: 20px">
        <form action="">
          <ion-row style="margin-bottom:5px">
            <span style="font-size: 12px; color: #0e1b2e"
            >First Name</span>
          </ion-row>
          <ion-row>
            <ion-input id="text" placeholder="  Erick"></ion-input>
          </ion-row>
         <ion-row style="margin-bottom:5px;margin-top:20px">
            <span style="font-size: 12px; color: #0e1b2e"
            >last Name</span>
          </ion-row>
          <ion-row>
            <ion-input id="text" placeholder="  Cooray"></ion-input>
          </ion-row>
         <ion-row style="margin-bottom:5px;margin-top:20px">
            <span style="font-size: 12px; color: #0e1b2e"
            >Mobile</span>
          </ion-row>
          <ion-row>
            <ion-input id="text" placeholder="  0714029836"></ion-input>
          </ion-row>

          <ion-button
            type="submit"
            expand="full"
            style="margin-top: 200px; border-radius: 20px"
            >Update Details</ion-button
          >
        </form>
      </ion-grid>
    </ion-list>
  </base-layout>
</template>

<style scoped>
#backtop {
  --background: null;
  --box-shadow: 0;
  --color: black;
}

#signout {
  --background: null;
  color: #0e1b2e;
  --box-shadow: 0;
}

#signout {
  position: fixed;
  bottom: 50px;
}

#text {
  height: 40px;
  background: #ffffff;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

ion-label {
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
}

#buttn {
  position: relative;
  text-transform: capitalize;
  height: 48px;
  bottom: -100px;
}
</style>

<script>
import {
  IonList,
  IonItem,
  IonText,
  IonCol,
  IonImg,
  IonGrid,
  IonRow,
  IonButton,
  IonIcon,
  IonLabel,
  IonCheckbox,
} from "@ionic/vue";
import { arrowBackOutline, chevronForwardOutline } from "ionicons/icons";
export default {
  components: {
    IonList,
    IonItem,
    IonText,
    IonCol,
    IonGrid,
    IonButton,
    IonRow,
    IonIcon,
    IonLabel,
    IonCheckbox,
  },
  data() {
    return {
      arrowBackOutline,
      chevronForwardOutline,
    };
  },
};
</script>