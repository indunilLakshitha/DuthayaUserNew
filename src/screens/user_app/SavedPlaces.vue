<template>
  <BaseLayout
    pageTitle=''
    page_default_back_link='/main-1'
  >
  <div class="ion-padding">
      <h1><b>Saved</b> Places</h1>
      <hr>
      <ion-list>
          <ion-item>
                  <img slot="start"  src="@/components/bottomDrawerSVG/saved_L.svg" alt="" width="20">
              <ion-label><b>Borella Agency Office</b> <br> <span style="font-size: 12px;">Nawala Road, Nugegoda</span> </ion-label>
          </ion-item>
      </ion-list>
  </div>
    
  </BaseLayout>
</template>

<script>
import {IonList, IonItem,  IonLabel, IonThumbnail,} from '@ionic/vue';
export default {
    components : {
        IonList,
IonItem,
IonLabel, IonThumbnail,
    }
}
</script>

<style>

</style>