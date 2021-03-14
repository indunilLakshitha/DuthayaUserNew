<template>
  <BaseLayout
    pageTitle=''
    page_default_back_link='/otp'
  >
  <div class="container ">
      <h1 class="ion-text-center"><b>Let's Get Started</b></h1>
  <p class="ion-text-center">Enter your first and last name <br> to continue</p>

  <form class="ion-padding">
      <ion-input v-model="FirstName" type="text"></ion-input>
      <br>
      <ion-input v-model="LastName" type="text"></ion-input>

    <p> <ion-checkbox color="dark"></ion-checkbox> I Agree to the <a href="" style="text-decoration:none;">Terms and Conditions</a></p>

    


  </form>
  <ion-button expand="full" @click="register">Next</ion-button>


  </div>
  </BaseLayout>
</template>

<script>
import { IonCheckbox, IonButton, } from '@ionic/vue';
import axios from 'axios';

export default {
    components : {
        IonCheckbox,
        IonButton,
    },
    data () {
      return{
        FirstName:'',
        LastName:''
      }
    },
    methods:{
      register(){
         axios.post(this.$router.options.URL+'otp/login',{
              "account_type": 'User',
              "mobile": '0716156576',
              "device_name": 'nokia',
              "otp_code": '1234'
      })
      .then(response => {
        if(response.data.user=='new'){
          
           this.$router.push('get-started')
        }else if(response.data.user=='exist'){

           this.$router.push('otp')
        }
      })
      }
    }
};
</script>

<style>
.container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
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
</style>