<script>
import { IonPage, IonTitle, IonToolbar, IonHeader } from '@ionic/vue';

export default {
  components: {IonPage, IonTitle, IonToolbar, IonHeader}
}
</script>


<template>
  <ion-page>
    <ion-title>Ado-pet! Que necesitas saber?</ion-title>

   <ion-content class="ion-padding">
    <h1>¡Bienvenido a Ado-Pet, tu destino ideal para la adopción de animales! </h1>
    <p>Nuestra misión es simple: brindar hogares amorosos a los animales necesitados y conectarlos con familias solidarias y compasivas.

En Ado-Pet creemos que cada animal merece una segunda oportunidad de ser feliz. Es por eso que trabajamos incansablemente para rescatar y rehabilitar animales de refugios, situaciones de negligencia y otras circunstancias desafiantes. Nuestro equipo de dedicados voluntarios y miembros del personal brindan a los animales el cuidado, el amor y la atención que necesitan para sanar y prosperar.

Nuestros animales provienen de una variedad de orígenes, incluidos animales callejeros, rendidos y animales rescatados de crueldad o abuso. Nos preocupamos mucho de garantizar que cada animal esté sano, feliz y listo para ser adoptado. Nuestro proceso de adopción es exhaustivo e incluye una visita domiciliaria y entrevistas con posibles adoptantes para garantizar la mejor combinación posible tanto para el animal como para la familia.

Estamos orgullosos de ofrecer una amplia gama de animales en adopción, incluidos perros, gatos, conejos, conejillos de indias y más. Nuestros animales están socializados, entrenados y listos para sus nuevos hogares. También ofrecemos recursos y apoyo para nuevos dueños de mascotas, incluidos consejos de entrenamiento, consejos de nutrición y apoyo continuo.

En Ado-Pet, creemos que cada animal merece un hogar amoroso y estamos comprometidos a encontrar ese hogar para todos y cada uno de los animales bajo nuestro cuidado. Únase a nosotros en nuestra misión de marcar una diferencia en las vidas de los animales necesitados. ¡Adopta hoy y dale a un animal una segunda oportunidad de ser feliz!</p>
  </ion-content>
  
  </ion-page>
  
</template>

<style scoped>
@media (min-width: 1024px) {
  p,  h1, ion-button{
  margin: 20px 40px;
}

}
</style>
