
  <template>
  <ion-page>
    <ion-content>
      <div class="ion-padding">
        <p style="font-size: 18px; font-weight: 700">Add New Card</p>
        <a href="/select_card">
          <img
            src="@/components/add_new_task/x.svg"
            alt=""
            style="position: absolute; right: 15px; top: 29px"
          />
        </a>

        <form action="">
          <ion-label position="stacked">Title</ion-label>
          <ion-input>
            <img
              src="@/components/select_card/visa.svg"
              alt=""
              style="margin: auto 10px; position: relative; right: -265px"
            />
          </ion-input>
        <br>
          <ion-row>
            <ion-col>
              <ion-label position="stacked">Expiry Date</ion-label>
              <ion-input type="text" placeholder="03/20"> </ion-input>
            </ion-col>
            <ion-col>
              <ion-label position="stacked">CVV</ion-label>
              <ion-input type="password">
                <img
                  src="@/components/add_new_task/q_mark.svg"
                  alt=""
                  style="margin: auto 10px; position: relative; right: -115px"
                />
              </ion-input>
            </ion-col>
          </ion-row>

          <ion-button type="submit" expand="full">Save Card</ion-button>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>


<script>
import {
  IonPage,
  IonContent,
  IonList,
  IonInput,
  IonRow,
  IonCheckbox,
  IonButton,
  IonGrid,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonCol,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonContent,
    IonList,
    IonInput,
    IonRow,
    IonCheckbox,
    IonButton,
    IonGrid,
    IonItem,
    IonItemDivider,
    IonLabel,
    IonCol,
  },
};
</script>

<style scoped>
ion-input {
  height: 40px;
  background: #ffffff;
  border: 1px solid #d5dbe0;
  box-sizing: border-box;
  border-radius: 2px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
}

ion-label {
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 5px;
}

ion-button {
  position: relative;
  text-transform: capitalize;
  height: 48px;
  bottom: -100px;
}
</style>