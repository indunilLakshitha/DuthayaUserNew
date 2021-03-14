<template>

        <div class="map" ref="mapDivRef"></div>
        <BottomDrawer></BottomDrawer>

</template>

<script>
import { ref, onBeforeMount } from "vue";
export default {
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