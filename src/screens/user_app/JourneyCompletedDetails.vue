<template>
  <BaseLayout page_default_back_link="/journey_ongoing">
    <div>
      <ion-row style="margin-left: 10px">
        <p style="font-size: 22px"><b>Journey #2135 Details</b> <br /></p>
      </ion-row>
      <ion-item-divider></ion-item-divider>
    </div>

    <ion-grid class="ion-padding">
      <ion-row>
        <img
          src="@/components/JourneyCompleted/pick_up.svg"
          alt=""
          style="margin-right: 10px"
        />
        <p style="text-align: left">
          <span style="font-size: 14px">
            <b>Pick Up</b>
          </span>
          <br />
          <span style="font-size: 14px; color: #7e8794; font-weight: 400"
            >Office . Battaramulla</span
          >
        </p>
        <p style="text-align: right; margin-left: 80px">
          <span style="font-size: 14px">
            <span
              style="
                font-size: 14px;
                color: #7e8794;
                font-weight: 400;
                text-align: right;
              "
              >10.15 a.m</span
            >
          </span>
        </p>
      </ion-row>
      <ion-row>
        <img
          src="@/components/JourneyCompleted/doc_delivery.svg"
          alt=""
          style="margin-right: 10px"
        />
        <p style="text-align: left">
          <span style="font-size: 14px">
            <b>Document Delivery</b>
          </span>
          <br />
          <span style="font-size: 14px; color: #7e8794; font-weight: 400"
            >Agency Office . Borella</span
          >
        </p>
        <p style="text-align: right; margin-left: 80px">
          <span style="font-size: 14px">
            <span
              style="
                font-size: 14px;
                color: #7e8794;
                font-weight: 400;
                text-align: right;
              "
              >10.15 a.m</span
            >
          </span>
        </p>
        <ion-badge
          style="
            background: #f5f5fb;
            color: #7e8794;
            font-size: 12px;
            font-weight: 400;
            margin-top: 0px;
            margin-right: 5px;
            margin-left: 40px;
          "
        >
          <img src="@/components/confirm_journey/person.svg" alt="" /> Martha
          Eldritch
        </ion-badge>
        <ion-badge
          style="
            background: #f5f5fb;
            color: #7e8794;
            font-size: 12px;
            font-weight: 400;
            margin-right: 5px;
          "
        >
          0713215563
        </ion-badge>
      </ion-row>
    </ion-grid>

    <ion-item-divider style="min-height: 2px !important"></ion-item-divider>
    <ion-grid class="ion-padding">
      <ion-row>
        <img
          src="@/components/finding_rider/dp.svg"
          alt=""
          style="margin: 0px 10px"
        />

        <p style="text-align: left">
          <span style="font-size: 14px; color: #7e8794">Dinesh Ruwantha</span>
          <span style="font-size: 14px; color: #7e8794; margin-left: 40px"
            >15th Augest 2020</span
          >
          <br />
          <img
            src="@/components/finding_rider/star.svg"
            alt=""
            style="margin: 0px 10px; position: relative; right: 10px"
          />
          <span style="position: relative; right: 20px">
            4.75
            <span style="font-size: 14px; color: #7e8794; font-weight: 400">
              Bicycle</span
            >
          </span>
          <span style="position: relative; left: 60px"> LKR 80.00 </span>
        </p>
      </ion-row>
    </ion-grid>
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
  IonBadge,
  IonTextarea,
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
    IonBadge,
    IonTextarea,
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
  /* width: 95%; */
  height: 40px;
  /* border: 1px solid #d5dbe0; */
  box-sizing: border-box;
  border-radius: 2px;
  text-align: left;
  /* margin-left: 10px ; */
  margin-right: 10px;
  font-size: 12px;
  background: #f7f7f7;
}
ion-item-divider {
  margin-top: 2px;
  min-height: 8px !important;
}
</style>