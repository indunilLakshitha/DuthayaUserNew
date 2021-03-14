<template>
  <BaseLayout page_default_back_link="/tasks">
    <div>
      <ion-row style="margin-left: 10px">
        <p style="font-size: 22px">
          <b>Confirm</b> Journey <br />

          <span style="font-size: 12px; color: #0e1b2e"
            >40 - 50 min . Estimated delivery time</span
          >
        </p>
      </ion-row>

      <!-- <ion-row> -->
      <div
        class="map"
        ref="mapDivRef"
        style="height: 200px; margin: auto 15px; border-radius: 15px"
      ></div>
      <!-- </ion-row> -->
    </div>

    <ion-grid class="ion-padding">
      <ion-row>
        <img
          src="@/components/confirm_journey/pickup.svg"
          alt=""
          style="margin-right: 10px"
        />
        <p style="text-align: left">
          <span style="font-size: 14px"> <b>Pick Up</b> </span> <br />
          <span style="font-size: 14px; color: #7e8794; font-weight: 400"
            >Office . Battaramulla</span
          >
        </p>
        <ion-button
          fill="clear"
          style="
            color: #284d84;
            text-transform: capitalize;
            position: absolute;
            right: 0px;
            font-size: 12px;
          "
          >Edit</ion-button
        >
      </ion-row>
      <ion-row>
        <img
          src="@/components/totalTasksDrawer/icon1.svg"
          alt=""
          style="margin-right: 10px"
        />
        <p style="text-align: left">
          <span style="font-size: 14px"> <b>Document Delivery</b> </span> <br />
          <span style="font-size: 14px; color: #7e8794">
            Agency Office . Borella</span
          >
          <br />
          <ion-badge
            style="
              background: #f5f5fb;
              color: #7e8794;
              font-size: 12px;
              font-weight: 400;
              margin-right: 5px;
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
        </p>
        <ion-button
          fill="clear"
          style="
            color: #284d84;
            text-transform: capitalize;
            position: absolute;
            right: 0px;
            font-size: 12px;
          "
          >Edit</ion-button
        >
      </ion-row>
      <ion-row>
        <img
          src="@/components/totalTasksDrawer/icon1.svg"
          alt=""
          style="margin-right: 10px"
        />
        <p style="text-align: left">
          <span style="font-size: 14px"> <b>Package Delivery</b> </span> <br />
          <span style="font-size: 14px; color: #7e8794"
            >Agency Office . Borella</span
          >
          <br />
          <ion-badge
            style="
              background: #f5f5fb;
              color: #7e8794;
              font-size: 12px;
              font-weight: 400;
              margin-right: 5px;
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
        </p>
        <ion-button
          fill="clear"
          style="
            color: #284d84;
            text-transform: capitalize;
            position: absolute;
            right: 0px;
            font-size: 12px;
          "
          >Edit</ion-button
        >
      </ion-row>
    </ion-grid>

    <ion-row style="height: 102px; background: #f5f5fb; margin: auto 15px">
      <div style="position: relative; margin: auto 20px">
        <img src="@/components/selectVehicle/moto.svg" alt="" />
      </div>
      <div style="position: relative; margin: auto 20px; right: -80px">
        <p style="text-align: right">
          <span>Bicycle</span> <br />
          <span style="font-size: 12px; color: #7e8794">5 min . 2 kg max</span>
        </p>
        <p style="font-weight: 700">LKR 120.00</p>
      </div>
    </ion-row>

    <ion-grid class="ion-padding">
      <ion-row>
        <ion-checkbox color="black"> </ion-checkbox>
        <span style="margin-left: 10px; font-size: 12px">Coperate</span>
      </ion-row>
      <br />

      <ion-row>
        <ion-textarea
          style="border: 1px solid #d5dbe0; font-size: 12px"
          rows="3"
          placeholder="Special Notes to mention ?"
        ></ion-textarea>
      </ion-row>
      <br />
      <ion-input placeholder="Enter Promo code">
        <div style="position: relative; left: 10px; margin-right: 10px">
          <img src="@/components/confirm_journey/promo.svg" alt="" />
        </div>
        <div style="position: absolute; right: 10px">
          <ion-button fill="clear" style="color: black">Apply</ion-button>
        </div>
      </ion-input>
      <br />

      <ion-row>
        <ion-col>
          <div class="ion-text-start">
            <p style="color: #7E8794; font-size: 14px; ">Sub Total</p>
            <p style="color: #7E8794; font-size: 14px; ">Delivery Fee</p>
            <p style="color: #7E8794; font-size: 14px; ">Discount</p>
          </div>
        </ion-col>
        <ion-col>
          <div class="ion-text-end">
            <p style="font-size: 14px; ">120.00</p>
            <p style="font-size: 14px; ">Free</p>
            <p style="font-size: 14px; "> - 40.00 </p>
          </div>
        </ion-col>
      </ion-row>
      <ion-item-divider ></ion-item-divider>
        <ion-row>
        <ion-col>
          <div class="ion-text-start">
            <p style="font-weight: 700; ">Total</p>
          </div>
        </ion-col>
        <ion-col>
          <div class="ion-text-end">
            <p style="font-weight: 700; ">80.00</p>
          </div>
        </ion-col>
      </ion-row>

    </ion-grid>

     <ion-item router-link="/select_card" color="light">
        <img
          src="@/components/confirm_journey/mastercard.svg"
          alt=""
          slot="start"
        />
        <span style="font-size:12px; font-weight: 700;">Master Card</span>
        <img
          src="@/components/bottomDrawerSVG/saved_places_right.svg"
          alt=""
          slot="end"
        />
      </ion-item>
      <ion-row class="ion-padding">
          <img
          src="@/components/confirm_journey/clock2.svg"
          alt=""
        />
        <ion-col>
            <ion-button fill="solid" expand="full" style="text-transform: capitalize; margin-left: 15px; height: 48px;">Confirm</ion-button>
        </ion-col>
      </ion-row>
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
</style>