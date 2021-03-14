<template>
  <BaseLayout page_default_back_link="/main-1">
    <div class="ion-padding">
      <ion-row>
        <img
          src="@/components/document_delivery/package_delivery.svg"
          alt=""
          class="ion-padding"
        />
        <p style="font-size: 22px"><b>Package</b> Delivery</p>
      </ion-row>

      <ion-grid class="ion-padding">
        <ion-row>
          <img  class="ion-padding" src="@/components/document_delivery/EllipseBlack.svg" alt="" />
          <ion-input placeholder="Delivery Location"> </ion-input>
        </ion-row>
      </ion-grid>
    </div>

    <ion-grid style="background: #e5e5e5" class="ion-padding">
      <ion-item>
        <img
          src="@/components/bottomDrawerSVG/saved_places.svg"
          alt=""
          slot="start"
        />
        Saved Places
        <img
          src="@/components/bottomDrawerSVG/saved_places_right.svg"
          alt=""
          slot="end"
        />
      </ion-item>
      <br />
      <ion-item>
        <img
          src="@/components/document_delivery/pick_from_map.svg"
          alt=""
          slot="start"
        />
        Pick From Map
        <img
          src="@/components/bottomDrawerSVG/saved_places_right.svg"
          alt=""
          slot="end"
        />
      </ion-item>
    </ion-grid>

    <ion-row class="ion-padding">
      <img src="@/components/bottomDrawerSVG/saved_L.svg" alt="" />
      <p class="ion-padding ion-text-start">
        <b>Bank </b> <br />
        <span>Nawala Road, Nugegoda</span>
      </p>
    </ion-row>



  </BaseLayout>
</template>

<script>
import {
  IonInput,
  IonRow,
  IonCheckbox,
  IonButton,
  IonGrid,
  IonItem,
  IonItemDivider,
} from "@ionic/vue";
export default {
  components: {
    IonInput,
    IonRow,
    IonCheckbox,
    IonButton,
    IonGrid,
    IonItem,
    IonItemDivider,
  },
};
</script>

<style scoped>
ion-input {
  width: 95%;
  height: 40px;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: left;
  /* margin-left: 10px ; */
  margin-right: 10px;
  font-size: 12px;
  background: #f7f7f7;
}

ion-button {
  text-transform: capitalize;
  color: #bdbdbd;
  --background: #f3f3f3;
}
</style>