<script>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from "pinia";
import { IonButton, IonApp, IonHeader, IonRouterOutlet, IonPage, IonTitle, IonContent, IonNav } from '@ionic/vue';
import { loginStore } from './stores/userStore.js'

export default {
  data(){
    return{
      userFromLogin: {},
    }
  },
  components: {IonButton, IonApp, IonHeader, IonRouterOutlet, IonPage, IonTitle, IonContent, RouterLink, RouterView, IonNav},
  setup(){
    const store1 = loginStore();
    const { estaLogeado } = storeToRefs(store1);
    const usuario = JSON.parse(localStorage.getItem('usuario'));    
    //const {logout} = store1;
    return {usuario, estaLogeado };
  },
  methods: {
    logout(){
      
      localStorage.clear();
      this.$router.push("/login").then(()=>{
        window.location.reload(true)
      });
     },
    //  esAdmin(){
    //   const user = JSON.parse(localStorage.getItem('usuario'))
    //   if (user) {
    //     return true
    //   }
    //   return user == "1"
    //  },
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
  <ion-app>
    <ion-header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Pets" v-if="isUser()">Pets</RouterLink>
        <RouterLink to="/About">About</RouterLink>
        <RouterLink  to="/Login" v-if="!isUser()">Login</RouterLink>
        <RouterLink to="/Register" v-if="!isUser()">Register</RouterLink>
        <RouterLink to="/updateUser" v-if="isUser()">Update User</RouterLink>
        <RouterLink to="/adoptionRegister" v-if="isUser()">AdoptionRegister</RouterLink>
        <p v-if="isUser()">Usuario logeado: {{ this.usuario.email }}</p>
        <ion-button color="dark" id="logout-button" @click="logout" v-if="isUser()">Logout</ion-button>
      </nav>      
    </ion-header>
    <ion-router-outlet/>
    

  </ion-app>
</template>

<style>

#logout-button{
  margin-top: -10%;
  margin-left: 90%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-left: 20px;
  
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  margin-left: 20px;
}

nav a:first-of-type {
  border: 0;
}

nav p{
  margin: 1%;
  margin-left: 2%;
  font-weight:600 ;
  color: grey;
}

@media (min-width: 1024px) {
  header {
    /*display: flex;*/
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

  .banner{
    width: 100%;
    height: 10%;
    background-color: #fff;
  }
}
</style>
