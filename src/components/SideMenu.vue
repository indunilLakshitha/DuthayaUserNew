<template>
  <ion-menu side="start" content-id="main-content">
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <!-- <ion-title>Menu</ion-title> -->
        <ion-buttons slot="end">
          <ion-menu-button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 8H1"
                stroke="#0E1B2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 15L1 8L8 1"
                stroke="#0E1B2E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-avatar class="ion-margin-start">
        <ion-img :src="ProfilePhotoUrl"> </ion-img>
      </ion-avatar>
      <br />
      <ion-title>{{ Title }}</ion-title>

      <br />
      <br />
      <ion-list lines="none">
        <!-- <ion-item v-for="item in navItems" :key="item.id"> -->
        <ion-item>
          <ion-row>
            <ion-col>
              <img src="@/icons/my_tasks.svg" alt="" />
            </ion-col>
            <ion-col>
              <a href="/journey_ongoing">
                <ion-label> My Tasks </ion-label>
              </a>
            </ion-col>
          </ion-row>
        </ion-item>

        <ion-item>
          <ion-row>
            <ion-col>
              <img src="@/icons/payment.svg" alt="" />
            </ion-col>
            <ion-col>
              <ion-label> Payment</ion-label>
            </ion-col>
          </ion-row>
        </ion-item>

        <ion-item>
          <ion-row>
            <ion-col>
              <img src="@/icons/help.svg" alt="" />
            </ion-col>
            <ion-col>
              <ion-label> Help </ion-label>
            </ion-col>
          </ion-row>
        </ion-item>

        <ion-item>
          <ion-row>
            <ion-col>
              <img src="@/icons/settings.svg" alt="" />
            </ion-col>
            <ion-col>
              <ion-label> Settings </ion-label>
            </ion-col>
          </ion-row>
        </ion-item>

        <br /><br /><br />

        <ion-item>
          <ion-row>
            <ion-col>
              <img src="@/icons/sign_out.svg" alt="" />
            </ion-col>
            <ion-col>
              <ion-label
                ><b> <p>Sign Out</p></b>
              </ion-label>
            </ion-col>
          </ion-row>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>


<script>
import { card, newspaper, information, settings } from "ionicons/icons";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
  IonIcon,
  IonItem,
  IonAvatar,
  IonImg,
  IonButtons,
  IonButton,
  IonThumbnail,
  IonMenuButton,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;
export default {
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonLabel,
    IonIcon,
    IonItem,
    IonAvatar,
    IonImg,
    IonButtons,
    IonButton,
    IonThumbnail,
    IonMenuButton,
    IonRow,
    IonCol,
  },

  data() {
    return {
      //icons
      card,
      newspaper,
      information,
      settings,
      Title: "",
      ProfilePhoto: "",

      navItems: [
        { id: 1, title: "My Tasks", icon: "@/icons/my_tasks.png" },
        {
          id: 2,
          title: "Payment",
          icon: card,
        },
        { id: 3, title: "Help", icon: information },
        { id: 4, title: "Settings", icon: settings },
      ],
    };
  },
  created() {
  },
  methods: {
   
  },
};
</script>

<style>
/* ion-content{
  background-color: aqua;
} */
</style>