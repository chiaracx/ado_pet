<script>
import { IonPage } from '@ionic/vue';
export default{
  components:{
  PetsList,
},
data() {
  return {
    items: [
      { mensaje: 'Foo' },
      { mensaje: 'Bar' }
    ]
  };
}
}
</script>

<template>
  <ion-page>
    <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <ul id="example-1" >
      <li v-for="item in items" :key="item.mensaje" > {{ $item.mensaje }}</li>
    </ul>
  </div>
  </ion-page>
  
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
