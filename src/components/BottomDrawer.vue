<template>
  <div class="bottom-drawer" ref="drawerRef">
    <div style="text-align: center">
      <button
        style="background-color: black; width: 140px"
        @click="toggleDrawer"
      ></button>

      <div class="content">
        <div style="margin-left: 30px; text-align: left">
          <h5><b>Hi</b> {{ Firstname }}</h5>
          <p>What do you want to deliver today?</p>
        </div>

        <div class="grid" style="color: #727597">
          <ion-row>
            <ion-col @click="show_more">
              <img
                src="@/components/bottomDrawerSVG/bank.svg"
                alt=""
                fill="green"
              />
              <p>
                Banking & <br />
                Finance
              </p>
            </ion-col>
            <ion-col @click="show_more">
              <img src="@/components/bottomDrawerSVG/delMan.svg" alt="" />
              <p>
                Documents <br />
                Handling
              </p>
            </ion-col>
            <ion-col @click="show_more">
              <img src="@/components/bottomDrawerSVG/colMan.svg" alt="" />
              <p>
                Collection & <br />
                Delivery
              </p>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col @click="show_more">
              <img src="@/components/bottomDrawerSVG/business.svg" alt="" />
              <p>
                Business<br />
                Supplies
              </p>
            </ion-col>
            <ion-col @click="show_more">
              <img src="@/components/bottomDrawerSVG/household.svg" alt="" />
              <p>
                Household <br />
                Supplies
              </p>
            </ion-col>
            <ion-col @click="show_more">
              <img src="@/components/bottomDrawerSVG/other.svg" alt="" />
              <p>
                Other<br />
                Services
              </p>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-input placeholder="Where do you want to send?"></ion-input>
          </ion-row>

          <ion-row class="ion-padding" @click="saved_places_screen">
            <img src="@/components/bottomDrawerSVG/saved_places.svg" alt="" />
            <p class="ion-padding"><b>Saved Places </b></p>
            <img
              src="@/components/bottomDrawerSVG/saved_places_right.svg"
              alt=""
            />
          </ion-row>

          <a href="/document_delivery"> Document Delivery (Temp)</a>
          <br />
          <a href="/AddNewTask"> Add New Task (Temp)</a>
          <br />
          <a href="/package_delivery"> Package Delivery (Temp)</a>
          <br />
          <a href="/tasks"> Tasks (Temp)</a>
          <br />
          <a href="/final_map"> Finding Rider (Temp)</a>

          <ion-row class="ion-padding">
            <img src="@/components/bottomDrawerSVG/saved_L.svg" alt="" />
            <p class="ion-padding ion-text-start">
              <b>Bank </b> <br />
              <span>Nawala Road, Nugegoda</span>
            </p>
          </ion-row>
        </div>
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
import { Plugins } from "@capacitor/core";
const { Storage } = Plugins;

export default {
  components: {
    IonRow,
    IonCol,
    IonInput,
  },
  data() {
    return {
      Firstname: "",
    };
  },
  created() {
    this.getObject();
    // console.log(user.Promise)
  },
  mounted() {
    let c = this.$refs.drawerRef;
    const gesture = createGesture({
      el: c,
      gestureName: "my-swipe",
      direction: "y",
      /**
       * when moving, we start to show more of the drawer
       */
      onMove: (event) => {
        if (event.deltaY < -300) return;

        // closing with a downward swipe
        if (event.deltaY > 20) {
          c.style.transform = "";
          c.dataset.open = "false";
          return;
        }

        c.style.transform = `translateY(${event.deltaY}px)`;
      },
      /**
       * when the moving is done, based on a specific delta in the movement; in this
       * case that value is -150, we determining the user wants to open the drawer.
       *
       * if not we just reset the drawer state to closed
       */
      onEnd: (event) => {
        c.style.transition = ".5s ease-out";

        if (event.deltaY < -30 && c.dataset.open !== "true") {
          c.style.transform = `translateY(${-350}px) `;
          c.dataset.open = "true";
          console.log("in on end");
        }
      },
    });

    // enable the gesture for the item
    gesture.enable(true);
  },

  methods: {
    toggleDrawer() {
      let c = this.$refs.drawerRef;
      if (c.dataset.open === "true") {
        c.style.transition = ".5s ease-out";
        c.style.transform = "";
        c.dataset.open = "false";
      } else {
        c.style.transition = ".5s ease-in";
        c.style.transform = `translateY(${-400}px) `; // I changed here 350px -> 400px
        c.dataset.open = "true";
      }
    },

    show_more() {
      this.$refs.drawerRef.style.transform = `translateY(${-400}px) `;
    },

    saved_places_screen() {
      this.$router.push("/saved_places");
    },
    async getObject() {
      const ret = await Storage.get({ key: "PROFILE" });
      const user = JSON.parse(ret.value);
      this.Firstname=user.UserProfile.first_name
      // console.log(user.UserProfile);
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
  height: 800px;
  bottom: -370px;
  border-radius: 30px;
  --placeholder-color: red;
}

ion-input {
  /* position: absolute; */
  width: 343px;
  height: 48px;
  left: 16px;
  /* top: 420px; */
  background: #f7f7f7;
  border-radius: 4px;
}
</style>