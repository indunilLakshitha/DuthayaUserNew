<template>
  <div class="bottom-drawer" ref="drawerRef">
    <div style="text-align: center">
      <button
        style="background-color: black; width: 140px"
        @click="toggleDrawer"
      ></button>

      <div >
        <ion-row>
          <img
            src="@/components/bottomDrawerSVG/doc_deli.svg"
            alt=""
            class="ion-padding"
          />
          <p style="text-align: left">
            <span style="font-size: 12px">Document Delivery</span> <br />
            <b>Borella Agency Office</b> <br />
            <span style="font-size: 12px; color: #7e8794"
              >13/100 , Borella Road , Colombo</span
            >
          </p>
        </ion-row>

      <ion-grid class="ion-padding">
          <ion-row   >
            <ion-input  placeholder="Recipient's Name"></ion-input>
          </ion-row>
          <ion-row >
            <ion-input  placeholder="Recipient’s Contact Number">
              <img style="position: absolute; right: 0px;"  class="ion-padding" src="@/components/sliderSVG/contact.svg" alt="" />
            </ion-input>
          </ion-row>

        <ion-row>
          <p style="font-size:12px; color:#34383E; float: left;"> <ion-checkbox color="dark"></ion-checkbox> 
          <span class="ion-padding" style="position:relative; top: -5px;" >Notify Recipient</span>
          </p>
        </ion-row>

          <ion-row>
            <!-- <ion-col> -->
              <ion-button id="btn_add"> + Add more</ion-button>
            <!-- </ion-col> -->
            <!-- <ion-col> -->
              <ion-button id="btn_done" >Done</ion-button>
              <!-- </ion-col> -->
          </ion-row>
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
          c.style.transform = `translateY(${-300}px) `;
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
        c.style.transform = `translateY(${-300}px) `; // I changed here 350px -> 400px
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
  height: 350px;
  bottom: -320px;
  border-radius: 30px;
  --placeholder-color: red;
}

ion-input {
  /* position: absolute; */
  background: #ffffff;
  text-align: left;
  /* Border Color */
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;

  margin-bottom: 5px;
  width: 50%;
  text-align: left;
  /* color: black;
  font-weight: 800; */
}

 #btn_done {

width: 194px;
height: 48px;
text-transform: capitalize;

/* main blue */

background: #2D81FF;
border-radius: 4px;
position: absolute;
right: 10px;
 }

 #btn_add{

/* width: 141px; */
height: 48px;
text-transform: capitalize;
--color: blue;
--background: #EBF2FF;
border-radius: 4px;
position: absolute;
left: 10px;
 }
</style>