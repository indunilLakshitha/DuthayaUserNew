<template>
  <base-layout>
    <ion-button id="backtop" router-link="/home">
      <ion-icon :icon="arrowBackOutline"></ion-icon>
    </ion-button>
    <ion-list>
      <ion-item>
        <ion-text>
          <h2><b>Account</b> Settings</h2>
        </ion-text>
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
        <ion-col size="7.5">
          <ion-text id="name">Ravindu Cooray</ion-text><br />
          <ion-text id="number">01123456789</ion-text>
        </ion-col>
        <ion-col size="2.5">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63465 0.819624C7.7756 0.503429 8.2244 0.503428 8.36535 0.819623L10.1161 4.74737C10.1743 4.87779 10.2975 4.96732 10.4395 4.98231L14.716 5.43368C15.0603 5.47001 15.199 5.89685 14.9418 6.12861L11.7474 9.00745C11.6413 9.10304 11.5942 9.24792 11.6238 9.38759L12.5161 13.5943C12.5879 13.933 12.2248 14.1968 11.9249 14.0238L8.19985 11.8753C8.07617 11.8039 7.92383 11.8039 7.80015 11.8753L4.07505 14.0238C3.77517 14.1968 3.41208 13.933 3.48391 13.5943L4.37616 9.38759C4.40578 9.24792 4.35871 9.10304 4.25265 9.00745L1.05816 6.12861C0.800993 5.89685 0.939681 5.47001 1.28395 5.43368L5.56049 4.98231C5.70249 4.96732 5.82573 4.87779 5.88386 4.74737L7.63465 0.819624Z"
              fill="#FFC921"
            /></svg
          ><ion-text id="raiting">4.75</ion-text>
        </ion-col>
      </ion-item>

      <!-- <ion-item> -->
      <ion-grid>
        <ion-row style="padding : 15px">
          <ion-lable style="padding : 15px"> <b>Saved Places</b></ion-lable>
        </ion-row>
        <ion-row>
          <ion-col size="2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#ECEEF7" />
              <rect
                x="9"
                y="12.1818"
                width="14.1818"
                height="9.81818"
                fill="#284D84"
              />
              <path d="M18.8183 12.1818V10H13.3638V12.1818" stroke="#284D84" />
            </svg>
          </ion-col>
          <ion-col>
            <ion-row>
              <ion-text><b>Office</b></ion-text>
            </ion-row>
            <ion-row>
              <ion-text>Nawala Road,Colombo</ion-text>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- </ion-item> -->
      <!-- <ion-item> -->
      <ion-grid>
        <ion-row>
          <ion-col size="2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="16" fill="#ECEEF7" />
              <rect
                x="9"
                y="12.1818"
                width="14.1818"
                height="9.81818"
                fill="#284D84"
              />
              <path d="M18.8183 12.1818V10H13.3638V12.1818" stroke="#284D84" />
            </svg>
          </ion-col>
          <ion-col>
            <ion-row>
              <ion-text><b>Home</b></ion-text>
            </ion-row>
            <ion-row>
              <ion-text>Nawala Road,Nugegoda</ion-text>
            </ion-row>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!-- </ion-item> -->
    </ion-list>
    <ion-grid>
      <ion-row>
        <ion-button href="/home" router-animation="back" id="signout">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#ECEEF7" />
            <g clip-path="url(#clip0)">
              <path
                d="M19 17.6667C18.6313 17.6667 18.3333 17.9653 18.3333 18.3333V21C18.3333 21.3673 18.0347 21.6667 17.6667 21.6667H15.6667V11.6667C15.6667 11.0973 15.304 10.5887 14.7587 10.3993L14.5613 10.3333H17.6667C18.0347 10.3333 18.3333 10.6327 18.3333 11V13C18.3333 13.368 18.6313 13.6667 19 13.6667C19.3687 13.6667 19.6667 13.368 19.6667 13V11C19.6667 9.89733 18.7693 9 17.6667 9H10.5C10.4747 9 10.4533 9.01133 10.4287 9.01467C10.3967 9.012 10.366 9 10.3333 9C9.598 9 9 9.598 9 10.3333V22.3333C9 22.9027 9.36267 23.4113 9.908 23.6007L13.92 24.938C14.056 24.98 14.1913 25 14.3333 25C15.0687 25 15.6667 24.402 15.6667 23.6667V23H17.6667C18.7693 23 19.6667 22.1027 19.6667 21V18.3333C19.6667 17.9653 19.3687 17.6667 19 17.6667Z"
                fill="#284D84"
              />
              <path
                d="M24.805 15.1953L22.1383 12.5286C21.9477 12.3379 21.661 12.2806 21.4117 12.3839C21.163 12.4873 21.0003 12.7306 21.0003 12.9999V14.9999H18.3337C17.9657 14.9999 17.667 15.2986 17.667 15.6666C17.667 16.0346 17.9657 16.3333 18.3337 16.3333H21.0003V18.3333C21.0003 18.6026 21.163 18.8459 21.4117 18.9493C21.661 19.0526 21.9477 18.9953 22.1383 18.8046L24.805 16.1379C25.0657 15.8773 25.0657 15.4559 24.805 15.1953Z"
                fill="#284D84"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(9 9)"
                />
              </clipPath>
            </defs></svg
          >Sign Out
        </ion-button>
      </ion-row>
      <ion-item
        button="true"
        style="border: 1px solid #d5dbe0"
        router-link="#"
        width="100%"
      >
        <p slot="start" style="font-size: 12px; font-weight: 700">
          Add New Saved Places
        </p>
        <img
          src="@/components/bottomDrawerSVG/saved_places_right.svg"
          alt=""
          slot="end"
        />
      </ion-item>
    </ion-grid>
  </base-layout>
</template>

<style scoped>
#next {
  --background: null;
  --box-shadow: 0;
  --color: black;
}
#dp {
  padding-top: 20px;
  padding-bottom: 20px;
}
#name {
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding-left: 16px;
}
#number {
  font-size: 12px;
  line-height: 15px;
  color: #7e8794;
  padding-left: 16px;
}
#raiting {
  font-size: 14px;
}
#languageselect {
  padding-left: 20px;
}
#english {
  padding-right: 30px;
  padding-left: 10px;
}
#sinhala {
  padding-left: 10px;
}
h2 {
  font-size: 24px;
}
#backtop {
  --background: null;
  --box-shadow: 0;
  --color: black;
}
#dp {
  padding: 15px;
}
#name {
  border-collapse: collapse;
}
#number {
  padding-top: 0px;
}
#signout {
  --background: null;
  color: #0e1b2e;
  --box-shadow: 0;
}
#amount {
  color: #2d81ff;
  font-size: 24px;
  font-weight: bold;
}
#earnings {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 8px;
  padding-top: 17px;
}
#journeys {
  font-size: 14px;
  padding-bottom: 17px;
  padding-top: 8px;
}
#dot {
  padding-top: 2px;
  padding-left: 8px;
  padding-right: 8px;
}

#lastdays {
  color: #7e8794;
  font-size: 14px;
  padding-bottom: 17px;
  padding-top: 8px;
}
#vehicle {
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 7px;
  padding-top: 27px;
}
#vehicledetails {
  font-size: 12px;
}
#bankdetails {
  padding-top: 32px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 7px;
}
#accno {
  font-size: 12px;
  padding-bottom: 30px;
}
#laguage {
  padding-top: 17px;
  padding-bottom: 28px;
  padding-left: 20px;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
}
#signout {
  position: fixed;
  bottom: 50px;
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