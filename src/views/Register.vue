<script>
import { IonPage, IonTitle, IonContent, IonInput, IonButton } from '@ionic/vue';
import { storeToRefs } from "pinia";
import { loginStore } from "../stores/userStore.js"
export default {
  components: {IonPage, IonTitle, IonContent, IonInput, IonButton},
  setup(){
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    const {register} = store;
    return { register, estaLogeado };
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    async register() {
      console.log(this.user);
      await this.register(this.user);
      if(this.estaLogeado){
        this.$router.push("/pets")
        
      } else{
        console.log("Usuario no logueado");
      }
      
    }
  },

}
</script>

<template>
  <ion-page>
    <ion-title>
      Register
    </ion-title>
    <ion-content>
      <form class="center">
        <div class="form-group"> 
          <ion-input v-model="user.nombre" label="nombre" type="text"></ion-input>
          <ion-input v-model="user.email" label="email" type="email"></ion-input>
          <ion-input v-model="user.password" label="password" type="password"></ion-input>
          <ion-button  @click="register">Register</ion-button>
        
        </div>
    </form>
    </ion-content>
    
    
    
  </ion-page>
  
</template>

<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin: 10px 0;
}

button {
  margin-top: 10px;
}
</style>