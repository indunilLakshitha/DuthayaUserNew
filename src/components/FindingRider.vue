<template>
  <div class="bottom-drawer" ref="drawerRef">
    <div style="text-align: center">
      <button
        style="background-color: black; width: 140px"
        @click="toggleDrawer"
      ></button>

      <div >

      <ion-grid class="ion-padding">

          <ion-row  >
              <ion-col>
                  <img  src="@/components/finding_rider/user.svg" alt="" style="margin: 0px 10px;" />
                  <span style="font-size: 14px; font-weight: 600; position:relative; top: -10px">Finding your Rider...</span>
              </ion-col>
          </ion-row>


              <ion-button expand="block" fill="clear" style="--background: #F8F8F6; color: red; text-transform: capitalize;" > Cancel</ion-button>

              

        </ion-grid>
          

          

      </div>
    </div>
  </div>
</template>

<script>
import { createGesture } from "@ionic/vue";
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonCheckbox } from "@ionic/vue";

export default {
  components: {
    IonGrid, IonRow,
    IonCol,
    IonInput,IonButton, IonCheckbox
  },
  // mounted() {
  //   let c = this.$refs.drawerRef;
  //   const gesture = createGesture({
  //     el: c,
  //     gestureName: "my-swipe",
  //     direction: "y",
  //     /**
  //      * when moving, we start to show more of the drawer
  //      */
  //     onMove: (event) => {
  //       if (event.deltaY < -300) return;

  //       // closing with a downward swipe
  //       if (event.deltaY > 20) {
  //         c.style.transform = "";
  //         c.dataset.open = "false";
  //         return;
  //       }

  //       c.style.transform = `translateY(${event.deltaY}px)`;
  //     },
  //     /**
  //      * when the moving is done, based on a specific delta in the movement; in this
  //      * case that value is -150, we determining the user wants to open the drawer.
  //      *
  //      * if not we just reset the drawer state to closed
  //      */
  //     onEnd: (event) => {
  //       c.style.transition = ".5s ease-out";

  //       if (event.deltaY < -30 && c.dataset.open !== "true") {
  //         c.style.transform = `translateY(${-350}px) `;
  //         c.dataset.open = "true";
  //         console.log("in on end");
  //       }
  //     },
  //   });

  //   // enable the gesture for the item
  //   gesture.enable(true);
  // },

  methods: {
    toggleDrawer() {
      let c = this.$refs.drawerRef;
      if (c.dataset.open === "true") {
        c.style.transition = ".5s ease-out";
        c.style.transform = "";
        c.dataset.open = "false";
      } else {
        c.style.transition = ".5s ease-in";
        c.style.transform = `translateY(${-110}px) `; // I changed here 350px -> 400px
        c.dataset.open = "true";
      }
    },

    show_more() {
      this.$refs.drawerRef.style.transform = `translateY(${-700}px) `;
    },

    saved_places_screen() {
      this.$router.push("/saved_places");
    },
  },
};
</script>

<style scoped>
.bottom-drawer {
  background-color: white;
  position: absolute;
  right: 0px;
  left: 0px;
  /* height: 450px;
  bottom: -420px; */
  height: 180px;
  bottom: -150px;
  border-radius: 30px;
  --placeholder-color: red;
}

</style>