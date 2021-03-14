<template>
  <div class="bottom-drawer" ref="drawerRef">
    <div style="text-align: center">
      <button
        style="background-color: black; width: 140px"
        @click="toggleDrawer"
      ></button>

      <div >
      

      <ion-grid class="ion-padding">

            <ion-row>
         
          <p style="text-align: left">
            <span style="font-size: 18px"> <b>2 Tasks</b> </span>
            <span style="font-size: 16px; color: #7E8794; font-weight: 400" > Remaining 2.5Km </span>
          </p>
        </ion-row>

        <ion-row>
          <img
            src="@/components/totalTasksDrawer/icon1.svg"
            alt=""
            style="margin-right: 10px;"
          />
          <p style="text-align: left">
            <span style="font-size: 16px"> <b>Document Delivery</b> </span> <br />
            <span style="font-size: 12px; color: #7e8794"
              >Borella Agency Office</span
            >
          </p>
          <ion-button fill="clear" style="color: #284D84; text-transform: capitalize; position: absolute; right: 0px;" >Edit</ion-button>
        </ion-row>
        <ion-row>
          <img
            src="@/components/totalTasksDrawer/icon1.svg"
            alt=""
            style="margin-right: 10px;"
          />
          <p style="text-align: left">
            <span style="font-size: 16px"> <b>Package Delivery</b> </span> <br />
            <span style="font-size: 12px; color: #7e8794"
              >Borella Agency Office</span
            >
          </p>
            <ion-button fill="clear" style="color: #284D84; text-transform: capitalize; position: absolute; right: 0px;" >Edit</ion-button>
        </ion-row>

          <ion-row>
            <!-- <ion-col> -->
              <ion-button id="btn_add"> + Add more</ion-button>
            <!-- </ion-col> -->
            <!-- <ion-col> -->
              <ion-button id="btn_done" @click=change_drawer >Continue</ion-button>
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
  emits : [
      'emit_changed_drawer'
  ],
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

    change_drawer(){
        this.$emit('emit_changed_drawer', 'select_vehicle')
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