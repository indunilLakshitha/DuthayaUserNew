import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import BaseLayout from '@/components/BaseLayout'
import SideMenu from '@/components/SideMenu'
import BottomDrawer from '@/components/BottomDrawer'
import BottomDrawerForMap from '@/components/BottomDrawerForMap'
import Slider from '@/components/Slider'
import TotalTasksDrawer from '@/components/TotalTasksDrawer'
import SelectVehicleDrawer from '@/components/SelectVehicleDrawer'
import FindingRider from '@/components/FindingRider'
import RiderFound from '@/components/RiderFound'

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
// import store from './store/index'
const app = createApp(App)
  .use(IonicVue)
  .use(router);
 
// app.use(store)
  app.component('BaseLayout', BaseLayout);
  app.component('SideMenu', SideMenu);
  app.component('BottomDrawer', BottomDrawer);
  app.component('BottomDrawerForMap', BottomDrawerForMap);
  app.component('Slider', Slider);
  app.component('TotalTasksDrawer', TotalTasksDrawer);
  app.component('SelectVehicleDrawer', SelectVehicleDrawer);
  app.component('FindingRider', FindingRider);
  app.component('RiderFound', RiderFound);
    
router.isReady().then(() => {
  app.mount('#app');
});