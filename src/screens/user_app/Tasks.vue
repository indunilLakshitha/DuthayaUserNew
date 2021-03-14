<template>

<ion-page>
  
        <ion-content>
          <div class="map" ref="mapDivRef"></div>
        <TotalTasksDrawer 
        v-if="drawer == 'total_tasks'" 
        @emit_changed_drawer="change_drawer"
        ></TotalTasksDrawer>

        <SelectVehicleDrawer
        v-if="drawer == 'select_vehicle'"
        ></SelectVehicleDrawer>
        </ion-content>
</ion-page>

</template>

<script>
import {IonPage, IonContent} from '@ionic/vue';
import { ref, onBeforeMount } from "vue";
export default {
  components : {
    IonPage, IonContent
  },
  data(){
    return {
      drawer: 'total_tasks',
    }
  },

  methods : {
    change_drawer(new_drawer){
      this.drawer = new_drawer
      // console.log(this.drawer);
    }
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
.map {
  width: 100%;
  height: 100%;
  /* z-index: ; */
}
</style>