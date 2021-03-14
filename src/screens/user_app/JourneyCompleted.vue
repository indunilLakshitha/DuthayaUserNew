<template>
  <BaseLayout page_default_back_link="/tasks">
    <!-- <div>
      <ion-row style="margin-left: 10px">
        <p style="font-size: 22px"><b>Task</b> List <br /></p>
      </ion-row>
      <ion-segment @ionChange="segmentChanged()" value="completed">
        <ion-segment-button value="completed" @click="completed()">
          <ion-label>Completed</ion-label>
        </ion-segment-button>
        <ion-segment-button value="ongoing" @click="ongoing()">
          <ion-label>Ongoing</ion-label>
        </ion-segment-button>
      </ion-segment>
      
    </div> -->

    <div id="ongoing_div">
      <ion-grid>
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
        <ion-item-divider style="min-height: 1px !important"></ion-item-divider>

        <ion-row>
          <img
            src="@/components/JourneyCompleted/pick_up_sm.svg"
            alt=""
            style="margin-right: 10px"
          />
          <p style="text-align: left">
            <span style="font-size: 14px; color: #7e8794; font-weight: 400"
              >Pick Up Point</span
            >
            <br />
            <span style="font-size: 14px">
              <b>Office . 12/22 , Highlevel Road</b>
            </span>
          </p>
          <ion-text
            fill="clear"
            style="
              color: #284d84;
              text-transform: capitalize;
              position: absolute;
              right: 0px;
              font-size: 12px;
            "
            >10.15 a.m</ion-text
          >
        </ion-row>
        <ion-row>
          <img
            src="@/components/confirm_journey/devivering.svg"
            alt=""
            style="margin-right: 10px"
          />
          <p style="text-align: left">
            <span style="font-size: 14px; color: #7e8794">
              Document Delivery</span
            >
            <br />
            <span style="font-size: 14px">
              <b>Agency Office . 1321,Road,Borella</b>
            </span>
            <br />
          </p>
          <ion-text
            fill="clear"
            style="
              color: #284d84;
              text-transform: capitalize;
              position: absolute;
              right: 0px;
              font-size: 12px;
            "
            >ETA 20 Min</ion-text
          >
        </ion-row>
      </ion-grid>

      <ion-row>
        <ion-button
          expand="full"
          style="
            fill: none;
            text-transform: capitalize;
            height: 38px;
            width: 120%;
            color: #284d84;
          "
          >View Details</ion-button
        >
      </ion-row>
      <ion-item-divider></ion-item-divider>
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
  IonBadge,
  IonTextarea,
  IonSegment,
  IonSegmentButton,
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
    IonSegment,
    IonSegmentButton,
  },
  methods: {
    // segmentChanged() {
    //   console.log("segment changed");
    // },
    // completed() {
    //   console.log("completed clicked");
    //   document.querySelector("#completed_div").style.display ;
    //   document.querySelector("#ongoing_div").style.display = "none" ;
    // },
    // ongoing() {
    //   console.log("ongoing clicked");
    //   document.querySelector("#completed_div").style.display = "none";
    //   document.querySelector("#ongoing_div").style.display ;
    // },
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
  margin-top: 5px;
  min-height: 8px !important;
}
</style>