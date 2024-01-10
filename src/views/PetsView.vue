<script>

import { IonPage, IonTitle, IonContent} from '@ionic/vue';
import ObjectList from '../components/ObjectList.vue';

export default {
  components: {IonPage, IonTitle, IonContent,  ObjectList},
  data() {
    
  },
  mounted(){
    const hasReloaded = localStorage.getItem('PetHasReloaded');

    if (!hasReloaded) {
      // Marcar que la página se ha recargado
      localStorage.setItem('PetHasReloaded', 'true');

      // Recargar la página
      window.location.reload();
    } else {
      // Limpiar la marca para futuros accesos
      localStorage.removeItem('PetHasReloaded');
    }
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
      Pets
    </ion-title>
    <ion-content>
      <div>
        <ObjectList v-if="isUser()" />
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
