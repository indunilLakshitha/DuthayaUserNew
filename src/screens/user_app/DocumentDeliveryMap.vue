<template>
  <BaseLayout page_default_back_link="/main-1">
    <div class="ion-padding">
      <ion-row>
        <img
          src="@/components/bottomDrawerSVG/doc_deli.svg"
          alt=""
          class="ion-padding"
        />
        <p style="font-size: 22px"><b>Document</b> Delivery</p>
      </ion-row>

      <ion-grid class="ion-padding">
        <ion-row>
          <img class="ion-padding" src="@/components/document_delivery/EllipseBlack.svg" alt="" />
          <ion-input> 51, School lane, Colombo 05</ion-input>
        </ion-row>
        <br>
        <ion-row>
          <img class="ion-padding" src="@/components/document_delivery/EllipseGrey.svg" alt="" />
          <ion-input placeholder="Delivery Location"> </ion-input>
        </ion-row>
      </ion-grid>
    </div>

    <div class="map" ref="mapDivRef" style="z-index: 1; "></div>

    <div style="z-index: 2; position: absolute; bottom: 10px; width: 100%;  ">
      <ion-button expand="block" router-link="/DocDeliMapBotdrawer" > Done </ion-button>
    </div>

  </BaseLayout>
</template>

<script>
import { ref, onBeforeMount } from "vue";
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

  setup() {
    //google map object
    const map = ref(null);
    //the map element in template
    const mapDivRef = ref(null);
    //load google script
    onBeforeMount(() => {
    //   const key = "AIzaSyC2sYmWvO8qkvCTHjXu_iRtFXkxW1IwIws";

      //create the script element to load
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        // `https://maps.googleapis.com/maps/api/js?key=AIzaSyCCzF3tX7earqdZM4UV2Pc2atAI_ua3rqQ&callback=initMap`
        `https://maps.googleapis.com/maps/api/js?callback=initMap`
      );
      googleMapScript.setAttribute("deffer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: "roadmap",
        zoom: 18,
        disableDefaultUI: true,
        center: { lat: 6.9271, lng: 79.8612 },
      });
    };

    return {
      mapDivRef,
    };
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

height: 48px;
/* width: 343px; */

background: #2D81FF;
border-radius: 4px;

margin: 0 10px;
}

.map {
  width: 100%;
  height: 100%;
  /* z-index: ; */
}
</style>