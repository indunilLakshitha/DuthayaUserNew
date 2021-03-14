import { createRouter, createWebHistory } from '@ionic/vue-router';
import HelloThere from '../pages/rider/HelloThere.vue'
import SelectLanguage from '../pages/rider/SelectLanguage.vue'
import OTP from '../pages/rider/WelcomeOTP.vue'
import home from '../pages/rider/Home.vue'
const routes = [
    {
        path: '/',
        redirect: '/selectlanguage'
      },
      {
        path: '/selectlanguage',
        name: 'SelectLanguage',
        component: SelectLanguage
    
      },
      {
        path: '/hellothere',
        name: 'HelloThere',
        component: HelloThere
      },
      {
        path: '/otp',
        component:OTP
      },
      {
        path: '/home',
        component:home
      },
      {
        path: '/get-started',
        component: () => import('@/screens/user_app/GetStartedScreen.vue')
      },
      {
        path: '/delivery',
        component: () => import('@/screens/user_app/DeliveryMan.vue')
      },
      {
        path: '/main-1',
        component: () => import('@/screens/user_app/Main1.vue')
      },
      {
        path: '/saved_places',
        component: () => import('@/screens/user_app/SavedPlaces.vue')
      },
      {
        path: '/document_delivery',
        component: () => import('@/screens/user_app/DocumentDelivery.vue')
      },
      {
        path: '/document_delivery_map',
        component: () => import('@/screens/user_app/DocumentDeliveryMap.vue')
      },
      {
        path: '/package_delivery',
        component: () => import('@/screens/user_app/PackageDelivery.vue')
      },
      {
        path: '/DocDeliMapBotdrawer',
        component: () => import('@/screens/user_app/DocDeliMapBotdrawer.vue')
      },
      {
        path: '/AddNewTask',
        component: () => import('@/screens/user_app/AddNewTask.vue')
      },
      {
        path: '/tasks',
        component: () => import('@/screens/user_app/Tasks.vue')
      },
      {
        path: '/confirm_journey',
        component: () => import('@/screens/user_app/ConfirmJourney.vue')
      },
      {
        path: '/select_card',
        component: () => import('@/screens/user_app/SelectCard.vue')
      },
      
      {
        path: '/add_new_card',
        component: () => import('@/screens/user_app/AddNewCard.vue')
      },
      {
        path: '/select_payment_method',
        component: () => import('@/screens/user_app/PaymentMethod.vue')
      },
      {
        path: '/account_settings',
        component: () => import('@/screens/user_app/AccountSettings.vue')
      },
      {
        path: '/edit_account',
        component: () => import('@/screens/user_app/EditAccount.vue')
      },
      {
        path: '/select_bank',
        component: () => import('@/screens/user_app/SelectBank.vue')
      },
      {
        path: '/task_list',
        component: () => import('@/screens/user_app/TaskList.vue')
      },
      {
        path: '/journy_ongoing_details',
        component: () => import('@/screens/user_app/JournyOngoingDetails.vue')
      },
      {
        path: '/final_map',
        component: () => import('@/screens/user_app/FinalMap.vue')
      },
      {
        path: '/journey_ongoing',
        component: () => import('@/screens/user_app/JournyOngoing.vue')
      },
      {
        path: '/journey_completed',
        component: () => import('@/screens/user_app/JourneyCompleted.vue')
      },
      {
        path: '/journey_completed_details',
        component: () => import('@/screens/user_app/JourneyCompletedDetails.vue')
      },
      {
        path: '/cansel_journey',
        component: () => import('@/screens/user_app/CanselJourney.vue')
      },
      {
        path: '/sql',
        component: () => import('@/components/Person.vue')
      },
]

const URL='http://duthaya.xcelenit.store/api/'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    URL
})

export default router