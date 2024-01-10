<script>
import { IonPage, IonTitle, IonContent, IonButton, IonInput, IonAlert } from '@ionic/vue';
import { storeToRefs } from "pinia";
import { loginStore } from "../stores/userStore.js"

export default {
  components: {IonPage, IonTitle, IonContent, IonButton, IonInput, IonAlert},
  setup(){
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    const {login} = store;
    return { login, estaLogeado };
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    async loginForm() {
      console.log(this.user);
      await this.login(this.user);
      console.log(this.estaLogeado);
      if(this.estaLogeado){
        this.$router.push("/pets")

      } else{
        console.log("Usuario no logueado");
      }
     }
  },
};
</script>

<template>

 <ion-page>
    <ion-title>
      Login
    </ion-title>
    <ion-content>
     <form class="center">
        <div class="form-group"> 
          <ion-input v-model="user.email" label="email" type="email"></ion-input>
          <ion-input v-model="user.password" label="password" type="password"></ion-input>
          <ion-button  @click="loginForm">Login</ion-button>
        </div>
      </form>
    </ion-content>
    
  </ion-page> 
  
</template>

<style>

</style>