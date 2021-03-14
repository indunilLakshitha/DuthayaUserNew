<template>
  <div class="bottom-drawer" ref="drawerRef" @click="task_tacking">
    <div style="text-align: center">
      <button
        style="background-color: black; width: 140px"
        @click="toggleDrawer"
      ></button>

      <div>
        <ion-grid class="ion-padding">
          <ion-row>
            <img
              src="@/components/finding_rider/dp.svg"
              alt=""
              style="margin: 0px 10px"
            />

            <p style="text-align: left">
              <span style="font-size: 14px; color: #7e8794">On Bicycle</span>
              <br />
              <span style="font-size: 16px; font-weight: 600"
                >Dinesh Ruwantha</span
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
                  . 44 Journeys</span
                >
              </span>
            </p>

            <img
              src="@/components/finding_rider/phone.svg"
              alt=""
              style="margin: 0px 10px; position: relative; right: -30px"
            />
          </ion-row>

          <ion-item-divider></ion-item-divider>

          <ion-row id="the_row">
            <ion-col>
              <div class="ion-text-start">
                <p style="color: #0e1b2e; font-size: 18px">Total</p>
              </div>
            </ion-col>
            <ion-col>
              <div class="ion-text-end">
                <p style="color: #0e1b2e; font-size: 18px; font-weight: 700">
                  LKR 120.00
                </p>
              </div>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { createGesture } from "@ionic/vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonCheckbox,
} from "@ionic/vue";

export default {
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonInput,
    IonButton,
    IonCheckbox,
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

    task_tacking() {
      document.querySelector("#the_row").innerHTML = `
        <ion-col>
            <p @click='load_more' style="font-size: 12px; font-weight: 700;">Task Tracking
            <img   src="${"@/components/finding_rider/chev_up.svg"}" alt="" style="margin-left: 5px;"  />
            </p>
        </ion-col>
        
        `;
    },

    load_more(){
      console.log(123);
    }
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
  height: 260px;
  bottom: -50px;
  border-radius: 30px;
  --placeholder-color: red;
}
</style>