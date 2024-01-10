<script>
import { IonAlert,IonPage, IonTitle, IonContent, IonButton, IonInput } from '@ionic/vue';
import { storeToRefs } from "pinia";
import { loginStore } from "../stores/userStore.js"

export default {
  components: {IonPage, IonTitle, IonContent, IonButton, IonInput, IonAlert},
  setup(){
    
    const store = loginStore();
    const { estaLogeado } = storeToRefs(store);
    const {update, deleteUser} = store;
    
    return { update, deleteUser, estaLogeado };
  },
  data() {
    return {
      user: {
        id: JSON.parse(localStorage.getItem('usuario')).id,
      },
      error:false
    }
  },
  methods: {
    async updateUser() {
      console.log(this.user);
      if(this.user.email == JSON.parse(localStorage.getItem('usuario')).email){
        await this.update(this.user);
        console.log(this.estaLogeado);
      if(this.estaLogeado){
        this.$router.push("/pets")
      }
     } else{
        console.log("Error en update");
        this.error = true;
     }
      },
    async deleteUserInStore(){
      await this.deleteUser();
      console.log(this.estaLogeado);
      localStorage.clear();
                    this.$router.push("/login").then(()=>{
                        window.location.reload(true)
                    });
    }
  },
};
</script>

<template>

 <ion-page>
    <ion-title>
      Actualizar tu contraseña
    </ion-title>
    <ion-content>
     <form class="center">
        <div class="form-group"> 
          <ion-input v-model="user.email" label="Email" type="email" required></ion-input>
          <ion-input v-model="user.password" label="New password" type="password" required></ion-input>
          <ion-button  @click="updateUser">Update</ion-button>
        </div>
        
        <IonAlert
        :is-open="error"
            @ionDidDismiss="() => error(false)"
            header="Error"
            sub-header="Error en la actualización"
            message="El mail ingresado no coincide con el del usuario"
            :buttons="[{
              text: 'OK',
              handler: () => {
                error = false;
              }
                }]"
        />
      </form>
      <h3>Deseas eliminar tu usuario?</h3>
      <ion-button color="danger" @click="deleteUserInStore">Eliminar mi usuario</ion-button>
    </ion-content>
    
  </ion-page> 
  
</template>

<style scoped>
ion-button{
  margin-left: 45%;

}
/* .login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin: 10px 0;
}

button {
  margin-top: 10px; 
}*/
</style>