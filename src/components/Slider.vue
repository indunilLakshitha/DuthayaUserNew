<template>
  <ion-slides pager="false" :options="slideOpts">
    <ion-slide>
      <img class="ion-padding" src="@/components/sliderSVG/documents.svg" alt="" />
      <img  class="ion-padding" src="@/components/sliderSVG/package.svg" alt="" />

    </ion-slide>
    <!-- <ion-slide>
      <h1>Slide 2</h1>
    </ion-slide>
    <ion-slide>
      <h1>Slide 3</h1>
    </ion-slide> -->
  </ion-slides>
</template>


<script>
import { IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };
    return { slideOpts }
  }
});
</script>