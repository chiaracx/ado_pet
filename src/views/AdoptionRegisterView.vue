<script>
import { IonPage, IonTitle, IonContent} from '@ionic/vue';
import RegisterList from '../components/AdminRegisterList.vue';
import FullPetList from '../components/AdminPetsList.vue';

export default {
  components: {IonPage, IonTitle, IonContent,  RegisterList, FullPetList},
  setup(){
    
  },
  methods: {
    isUser(){
      let retorno = false;
      const user = JSON.parse(localStorage.getItem('usuario'))
      if(user != null){retorno = true}
      return retorno
     }
  }
}
</script>


<template>
  <ion-page>
    <ion-title>
      Admin View
    </ion-title>
    <ion-content>
      <div>
        <RegisterList v-if="isUser()" />
      </div>
      <div>
        <FullPetList v-if="isUser()" />
      </div>
    </ion-content>
  </ion-page>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
