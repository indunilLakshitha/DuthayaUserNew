 <template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="page_default_back_link"
          ></ion-back-button>
        </ion-buttons>
        <ion-title> {{ pageTitle }} </ion-title>
        <!-- <ion-buttons slot></ion-buttons> -->
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

 <script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent, //must have 5
  IonBackButton,
  IonButtons,
  
} from "@ionic/vue";

export default {
  props: ["pageTitle", "page_default_back_link"],

  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons, // Ion BUTTONS - PLURAL
    
  },
};
</script>

<style >



</style>