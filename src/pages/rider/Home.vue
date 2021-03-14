<template>
  <ion-page>
    <ion-content>
      <ion-fab vertical="top" horizontal="start">
        <ion-fab-button color="">
          <ion-icon name="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <ion-fab vertical="top" horizontal="end">
        <ion-fab-button>
          <ion-icon name="person-circle"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <g-map> </g-map>
      <ion-card>
        <ion-header>
          <ion-card-subtitle>You're Online</ion-card-subtitle>
        </ion-header>
        <ion-card-content>
          <ion-button expand="full"> Go Offline </ion-button>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-fab-button {
  --background: #;
  --icon: red;
}
ion-button {
  --background: #34383e;
}
</style>


 <script>
import {
  IonPage,
  IonFab,
  IonFabButton,
  IonCard,
  IonIcon,
  IonCardSubtitle,
  IonHeader,
  IonCardContent,
  // IonToolbar,
  IonContent,
  IonButton,
  // IonTitle,
  // IonHeader,
} from "@ionic/vue";
import GMap from "./GMap.vue";
import { add, arrowBackCircle, personCircle } from "ionicons/icons";

export default {
  components: {
    IonPage,
    IonFab,
    IonFabButton,
    IonCard,
    IonCardSubtitle,
    IonIcon,
    IonContent,
    IonButton,
    IonHeader,
    IonCardContent,
    // IonTitle,
    // IonHeader,
    GMap,
  },
  setup() {
    return {
      add,
      arrowBackCircle,
      personCircle,
    };
  },
};
</script>
