<script>
//import HelloWorld from '../components/HelloWorld.vue'
import { IonPage, IonTitle, IonContent, IonButton, IonGrid, IonCol, IonRow } from '@ionic/vue';
import { storeToRefs } from "pinia";
import { loginStore } from '../stores/userStore.js'
export default{
  components: {IonPage, IonTitle, IonContent, IonButton, IonGrid, IonCol, IonRow},
  setup(){
    const store1 = loginStore();
    const { usuario, estaLogeado } = storeToRefs(store1); 
    
    //const {logout} = store1;
    return {usuario, estaLogeado };
  }
}
</script>

<template>
  <ion-page>
    
    <ion-title>¡Bienvenido a Ado-Pet!</ion-title>
    <ion-content class="ion-padding">

        <p>
        En Adoptar-Pet, creemos en el poder de las historias compartidas, las conexiones especiales y las colas felices. Nuestra misión es unir a mascotas adorables con familias amorosas para crear vínculos que duren toda la vida.      </p>
        
        <h2>Para adoptar a nuestros amigos haga click aqui</h2>
          <ion-button v-if="!estaLogeado" color="secondary">
            <RouterLink  to="/Login" v-if="!estaLogeado">Quiero adoptar!</RouterLink>
          </ion-button>
          <ion-button v-if="estaLogeado" color="success">
            <RouterLink  to="/Pets" v-if="estaLogeado">Quiero adoptar!</RouterLink>
          </ion-button>
        
        <h3>¿Por qué Adoptar?</h3>
        <p>

          Adoptar una mascota es más que agregar un nuevo miembro peludo a tu familia; es una experiencia transformadora llena de amor y alegría. En nuestro sitio, encontrarás una amplia variedad de compañeros peludos, cada uno con su propia historia única y personalidad encantadora.
        </p>
        <ion-grid>
          <ion-row>
            <ion-col>
              <h3>Explora Nuestro Refugio Virtual</h3>
              <p>Navega por nuestro refugio virtual y conoce a los animales que están buscando un hogar. Desde cachorros juguetones hasta gatos cariñosos, cada uno de ellos está listo para ser parte de tu vida y llenar tu hogar de amor y diversión.</p>
          
            </ion-col>
            <ion-col>
              <h3>¿Cómo Funciona?</h3>
              <p>Explora: Descubre perfiles detallados de cada mascota con fotos encantadoras y descripciones que resaltan sus características especiales.
              Conéctate: Encuentra la mascota que roba tu corazón y contacta con nosotros para obtener más información o programar una visita.
              Adopta: Una vez que hayas encontrado tu compañero perfecto, ¡prepárate para darle la bienvenida a tu hogar! Nuestro equipo te guiará en cada paso del proceso de adopción.
              </p>
            </ion-col>
            <!-- <ion-col>3</ion-col> -->
          </ion-row>
        </ion-grid>

         
          <h3>Únete a Nuestra Comunidad
          </h3>
          <p>Además de encontrar a tu compañero peludo, únete a nuestra comunidad en línea. Comparte tus experiencias, fotos adorables y encuentra consejos útiles de otros amantes de los animales. Juntos, podemos hacer del mundo un lugar mejor para todas las mascotas.
          Adoptar una mascota es un acto de amor que cambia vidas. ¡Comienza tu viaje en Adoptar-Pet hoy y descubre la alegría de dar y recibir amor incondicional!</p>
          
    </ion-content>
  </ion-page>
  
</template>

<style scoped>
p,  h2, h3, ion-button{
  margin: 20px 40px;
}

ion-button{
  margin-left: 45%;

}
</style>