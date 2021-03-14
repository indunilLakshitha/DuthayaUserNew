<template>
  <BaseLayout page_default_back_link="/confirm_journey">
    <ion-grid>
      <ion-row>
        <ion-input placeholder="   HNB"   style="margin-left: 15px"> </ion-input>
      </ion-row>
      <!-- </ion-grid>
    <ion-grid id="result"> -->

      <ion-item>
        <img
          src="@/components/bottomDrawerSVG/loc_icon.svg"
          alt=""
          style="margin-left: 15px"
          slot="start"
        />
        <p class="ion-padding ion-text-start">
          <b>Bank </b> <br />
          <span>Nawala Road, Nugegoda</span>
        </p>
      </ion-item>
      <!-- </ion-item> -->
      <!-- <ion-item-divider></ion-item-divider> -->

      <ion-item>
        <!-- <ion-item> -->
        <img
          src="@/components/bottomDrawerSVG/loc_icon.svg"
          alt=""
          style="margin-left: 15px"
          slot="start"
        />
        <p class="ion-padding ion-text-start">
          <b>Bank </b> <br />
          <span>Nawala Road, Nugegoda</span>
        </p>
        <!-- </ion-item> -->
      </ion-item>
    </ion-grid>
    <ion-grid>
      <ion-item button="true" router-link="#" width="100%" detail="false">
        <img
          src="@/components/bottomDrawerSVG/pick_up_from_map.svg"
          alt=""
          slot="start"
        />
        <p style="font-size: 12px; font-weight: 700">Pick From Map</p>
        <img
          src="@/components/bottomDrawerSVG/saved_places_right.svg"
          alt=""
          slot="end"
        />
      </ion-item>
    </ion-grid>
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
#result {
  margin-top: 2px !important;
  margin-bottom: 2px !important;
}
ion-input {
  width: 95%;
  height: 40px;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 5px;
  text-align: left;
  /* margin-left: 10px ; */
  margin-right: 10px;
  font-size: 12px;
  background: #f7f7f7;
}
</style>