<script>
import AdoptForm from './AdoptForm.vue'
import FoundPetsForm from './FoundPetsForm.vue'
export default {
  data() {
    return {
      jsonList: [],
    };
  },
  mounted() {
    // Realiza una solicitud HTTP para obtener la lista de objetos JSON desde el enlace
    fetch('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas')
      .then(response => response.json())
      .then(data => {
        this.jsonList = data;
      })
      .catch(error => {
        console.error('Error al obtener la lista de objetos JSON', error);
      });
  },
  components:{
    AdoptForm, FoundPetsForm
  },
  setup(){

  },
  methods:
  {
    adopt(id){
      if(this.isUser()) {
      const adoptado = this.jsonList.find((pet) => pet.id == id)
      this.$refs.formPopup.showForm(adoptado, JSON.parse(localStorage.getItem('usuario')).id)
     
      } else {this.$router.push("/login")}
    },
    isUser(){
      let retorno = false;
      const user = JSON.parse(localStorage.getItem('usuario'))
      if(user != null){retorno = true}
      return retorno
     },
    subirMascota(){
      if(this.isUser()) {
      this.$refs.foundPetPopup.showForm()
    } else this.$router.push("/login")
    }
    
  }
}
</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">  
      <h1 class="text-center">Mascotas a adoptar</h1>
      <div class="container">
        <div class="row">


          <div class="card" style="width: 18rem; margin-right: 3%; margin-left: 3%; margin-bottom: 1%;" v-for="(item, index) in jsonList" :key="index">
              <div class="card-body">
                <h5 class="card-title titulo-animales" id={{item.id}} > {{ item.nombre }} </h5>
                <h6 class="card-subtitle mb-2 text-muted"> {{ item.id }} - {{ item.especie }} </h6>
                <p class="card-text"> {{ item.descripcion}} </p>
                <button class="card-link btn btn-primary" v-on:click="adopt(item.id)">Adoptar</button>
                
                
              </div>
            </div>


          <!-- <div class="col-sm align-items-center" v-for="(item, index) in jsonList" :key="index">
            <div id={{item.id}} class="titulo-animales text-center "> {{ item.id }} - {{ item.especie }} - {{ item.nombre }} - {{  }}</div>
            
              <div class="titulo-animales text-center ">
                {{ item.descripcion}}
              </div>
              <div class="d-flex flex-column align-items-center">
                <button class="btn btn-primary" v-on:click="adopt(item.id)">Adoptar</button>
              </div>

            </div>
          </div> -->
          <!-- <AdoptForm ref="formPopup" /> -->
          <AdoptForm ref="formPopup" />
          </div>
        </div>
        <div margin="auto">
          <button id="botonMascota" class="btn btn-success" v-on:click="subirMascota()">Encontró una mascota en busqueda de un hogar? Ayudela a encontrar un hogar</button>
          <FoundPetsForm ref="foundPetPopup"/>
      </div>
</template>

<style>
  h1{
    padding: 30px;
  }
  div{
    color: black;
  }
  
img {
  width: 300px;
  height: 300px;
  object-fit: cover; /* Para recortar las imágenes manteniendo su relación de aspecto */
  display: block; /* Asegura que no haya espacio adicional alrededor de la imagen */
  margin-bottom: 30px;
  border-radius: 5%;
}

  button{
    margin-bottom: 30px;
    justify-content: center;
  }
  
  .titulo-animales{
    font-size: 1.5rem;

  }

  .container{
    margin-bottom: 10%;
    margin-right: auto;
    margin-left: auto;
  }

  #botonMascota{
    margin-left:35%;
    margin-right: 35%;
    margin-bottom: 5%;
  }

</style>