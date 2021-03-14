<template>
  <ion-page>
    <SideMenu></SideMenu>

    <div class="ion-page" id="main-content">
      <ion-header class="ion-no-border">
        <ion-toolbar class="toolbar ion-no-border">
          <ion-buttons slot="start">
            <ion-menu-button color="light">
              <img src="@/icons/side_menu.svg" />
            </ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>

      <ion-content class="ion-padding" scroll-y="false">
        <img src="@/screens/user_app/background_svgs/main-1.svg" alt="" />

        <BottomDrawer></BottomDrawer>
        <!-- <BottomDrawerForMap></BottomDrawerForMap> -->
        <!-- <Slider></Slider> -->
      </ion-content>
    </div>
  </ion-page>
</template>
 
 <script>
import {
  IonApp,
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import { IonButton, actionSheetController } from "@ionic/vue";
import { defineComponent } from "vue";
import { caretForwardCircle, close, heart, trash, share } from "ionicons/icons";
import { createGesture } from "@ionic/vue";

export default {
  components: {
    IonApp,
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonButton,
  },

  
};
</script>

<style  scoped>
ion-header,
ion-content {
  --ion-background-color: #156ef3;
}


</style>
