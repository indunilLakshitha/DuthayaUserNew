<template>
  <BaseLayout page_default_back_link="/main-1">
    <div class="ion-padding">
      <p style="font-size: 22px"><b>Add</b> New Task</p>
      <Slider></Slider>

    <ion-input id="input1" placeholder="Where do you want to send ?"></ion-input>

    <p style="font-size: 22px"><b>Recipient</b> Info</p>
    <ion-input placeholder="Recipient’s Name">

    </ion-input>
    <br>
    <ion-input placeholder="Recipient’s Contact Number">
        <img style="position: absolute; right: 0px;" class="ion-padding" src="@/components/sliderSVG/contact.svg" alt="" />
    </ion-input>
    <ion-row class="ion-padding">
        <ion-checkbox color="black"> </ion-checkbox> <span style="margin-left:10px; font-size:12px ">Notify Recipent</span>
    </ion-row>

    <ion-button expand="block" size="medium" style="position: relative; top: 50px;">Continue</ion-button>
    
    </div>
  </BaseLayout>
</template>

<script>
import {IonInput, IonRow, IonCheckbox, IonButton} from '@ionic/vue'
export default {
    components: {
        IonInput, IonRow, IonCheckbox, IonButton
    }
};
</script>

<style scoped>
      ion-input {
  width: 95%;
  height: 40px;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: left;
  /* margin-left: 10px ; */
  margin-right: 10px ;
   font-size: 12px;

}

 #input1{
  height: 50px;
     background: #F7F7F7;
 }

 ion-button {
     text-transform: capitalize;
     color: #BDBDBD;
     --background: #F3F3F3;
 }
</style>