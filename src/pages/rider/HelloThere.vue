<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <strong id="title">Hello There!</strong>
        <p>Enter your mobile number to continue</p>
          <form action="">
            <ion-input
            type="number"
            placeholder="+94  Enter your phone number"
            v-model="mobileNo"
          ></ion-input>
          </form>
        <ion-button expand="full" v-on:click="getOtp"  >Next</ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>


<style scoped>
* {
  font-family: inter;
}
ion-input {
  height: 50px;
  width: 93%;
  background: #ffffff;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container p {
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 50px;
}
#container a {
  text-decoration: none;
}
ion-button {
  height: 50px;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
}
#title {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  padding-bottom: 5px;
}
</style>



 <script>
import {
  IonPage,
  IonInput,
  //   IonItem,
  IonContent,
  IonButton,
//   IonTitle,
} from "@ionic/vue";
import axios from 'axios';

export default {
  components: {
    IonPage,
    IonInput,
    // IonItem,
    IonContent,
    IonButton,
    // IonTitle,
  },
  data () {
          return {
            mobileNo :''
          }
  },
  methods: {
    getOtp(){
       axios.post(this.$router.options.URL+'otp/request',{
            "account_type": "User",
            "mobile": this.mobileNo,
            "device_name": "magni"
      })
      .then(response => {
        console.log(response.data);
        if(response.data.user=='new'){
          
          //  this.$router.push('get-started')
           this.$router.push('otp')
        }else if(response.data.user=='exist'){

           this.$router.push('otp')
           
        }
      })
 
    },
  },

};
</script>