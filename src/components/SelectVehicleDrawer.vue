<template>

  
  <div class="bottom-drawer" ref="drawerRef" >
    <div class="upper_part">
      <ion-row style="justify-content:center;">
        <img src="@/components/selectVehicle/doc.svg"  style="margin: 0px 5px;" />
        <img src="@/components/selectVehicle/pack.svg"  style="margin: 0px 5px;" />
        <p style="font-size:14px;">2 Task Journey. 20 Km</p>

      </ion-row>
  </div>

    <div style="text-align: center">
      <!-- <button
        style="background-color: black; width: 140px"
        @click="toggleDrawer"
      ></button> -->

      <div >


      <ion-grid class="ion-padding">
          <ion-row   >
             <p style="text-align: left">
            <span style="font-size: 23px"> <b>Select</b>  </span> <span style="font-size: 22px; font-weight: 300;">Vehicle</span>
            
          </p>
          </ion-row>

          <ion-row>
              <div id="change_color"
              @click="change_div_border"
               style="border: 1px solid grey; padding: 5px; width: 140px; height: 204px;">
                 <div style="background: #ECEEF7; padding: 5px; width: 60px; ">
                     <img
            src="@/components/selectVehicle/clock.svg"

          /> <span style="font-size: 12px; font-weight: 600">4 min</span>
                 </div>
                    <div style="position:relative; top : 10px;">
                        <img src="@/components/selectVehicle/moto.svg" alt="">

                        <p style="font-size: 16px; font-weight: 600; color: #284D84 "> Moto . 3kg <br>
                            <span style="font-size: 10px; font-weight: 500; color: #858596 ">230 x 230 x 330 cm</span> 

                        </p>

                        <p style="font-weight: 700;"> LKR 120.00</p>
                    </div>

              </div>
          </ion-row>

        <br>

          <ion-row>
            <!-- <ion-col> -->
              <ion-button id="btn_add"> + Add more</ion-button>
            <!-- </ion-col> -->
            <!-- <ion-col> -->
              <ion-button id="btn_done"  router-link="/confirm_journey" >Continue</ion-button>
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
  //         // c.style.transform = `translateY(${-400}px) `;
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

    change_div_border(){
        document.querySelector('#change_color').style.border= '2px solid #2D81FF'
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
  height: 400px;
  bottom: -20px;
  border-radius: 30px;
  --placeholder-color: red;
  z-index: 3;
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

 .upper_part{
   z-index: 1;
   background: #F5F5FB; position:absolute; top: -20px; height: 50px; width: 100%;
   border-top-left-radius: 30px; 
   border-top-right-radius: 30px; 
   border-bottom-right-radius: -50px; 
    text-align: center;
 }
</style>