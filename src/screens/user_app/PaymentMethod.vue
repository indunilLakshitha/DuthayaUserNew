<template>
  <BaseLayout page_default_back_link="/confirm_journey">
    <ion-grid class="ion-padding">
      <ion-row style="margin-left: 0 px">
        <p style="font-size: 22px">
          <b>Payment</b> Method <br />

          <span style="font-size: 12px; color: #0e1b2e"
            >Manage Your Payment Methods</span
          >
        </p>
      </ion-row>
      <!-- <ion-item-divider></ion-item-divider> -->
      <ion-row style="margin-left: 0px">
        <p style="font-size: 22px">
          <b>Coperate Account </b><br />

          <span style="font-size: 12px; color: #0e1b2e"
            >Pearl Fabric Pvt. ltd</span
          >
        </p>
      </ion-row>
      <ion-row style="margin-left: 0px">
        <p style="font-size: 22px"><b>Personal </b><br /></p>
      </ion-row>
      <!-- <ion-item-divider></ion-item-divider> -->
      <ion-row>
        <ion-checkbox color="black"> </ion-checkbox>
        <img
          src="@/components/select_card/visa.svg"
          alt=""
          style="margin: auto 10px"
        />
        **** 8896
      </ion-row>
      <br />
      <ion-row>
        <ion-checkbox color="black"> </ion-checkbox>
        <img
          src="@/components/select_card/mastercard.svg"
          alt=""
          style="margin: auto 10px"
        />
        **** 8896
      </ion-row>
      <br />
      <ion-row>
        <ion-checkbox color="black"> </ion-checkbox>
        <img
          src="@/components/select_card/cash.svg"
          alt=""
          style="margin: auto 10px"
        />
        Cash
      </ion-row>
      <br />
      <ion-row>
        <ion-checkbox color="black"> </ion-checkbox>
        <img
          src="@/components/select_card/lankapay.svg"
          alt=""
          style="margin: auto 10px"
        />
        Lanka Pay QR
      </ion-row>
      <br />

      <ion-item
        button="true"
        style="border: 1px solid #d5dbe0"
        router-link="/add_new_card"
      >
        <p slot="start" style="font-size: 12px; font-weight: 700">
          + Add New Card
        </p>
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
  position: relative;
  text-transform: capitalize;
  height: 48px;
  bottom: -100px;
}
</style>