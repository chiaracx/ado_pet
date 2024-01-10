<script>
import RegisterEditForm from './RegisterEditForm.vue';

export default {
  data() {
    return {
      jsonList: [],
    };
  },
  mounted() {
    // Realiza una solicitud HTTP para obtener la lista de objetos JSON desde el enlace
    fetch('https://6555589284b36e3a431db737.mockapi.io/registros') 
      .then(response => response.json())
      .then(data => {
        this.jsonList = data;
      })
      .catch(error => {
        console.error('Error al obtener la lista de objetos JSON', error);
      });
  },
  components:{
    RegisterEditForm
},
  methods:
  {
    async eliminarRegistro(id){
      try{
        const rta = await fetch(`http://localhost:3000/registros/${id}`, {method: 'DELETE'})
        //no sabria si buscar errores o no
        if (rta.status == 200){
          window.location.reload(true)
          console.log("registro eliminado con exito");
        } else{
          console.log();
        }
      } catch(e){
        console.log(e);
      }
      
       
    },
    modificarRegistro(id){
      this.$refs.modifyPopup.showForm(id)
    }
  } 
}
</script>

<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">  
      <h1 class="text-center">Lista de Registers</h1>
      <div class="container">
        <div class="row"> 

          <div class="card" style="width: 18rem; margin-right: 3%; margin-left: 3%; margin-bottom: 1%;" v-for="(item, index) in jsonList" :key="index">
              <div class="card-body">
                <h5 class="card-title titulo-animales" id={{item.id}}> user {{ item.usuarioId }} - pet {{ item.mascotaId }} </h5>
                <h6 class="card-subtitle mb-2 text-muted"> {{ item.id }} - date {{ item.fecha }} </h6>
                <p class="card-text"> {{ item.mascotaNombre}} - {{ item.mascotaEspecie }} - {{ item.mascotaDescripcion }} </p>

                <button class="card-link btn btn-primary" v-on:click="modificarRegistro(item.id)">Modificar</button>
                <button class="card-link btn btn-primary" v-on:click="eliminarRegistro(item.id)">Eliminar</button>
                
                
              </div>
            </div>


          <!-- <div class="col-sm align-items-center" v-for="(item, index) in jsonList" :key="index">
            <div id={{item.id}} class="titulo-animales text-center "> {{ item.id }} - user {{ item.usuarioId }} - pet {{ item.mascotaId }} - date {{ item.fecha }}</div>

              <div class="titulo-animales text-center ">
                {{ item.mascotaNombre}} - {{ item.mascotaEspecie }} - {{ item.mascotaDescripcion }}
              </div>
              <div class="d-flex flex-column align-items-center">
                <button class="btn btn-primary" v-on:click="modificarRegistro(item.id)">Modificar</button>
                <button class="btn btn-primary" v-on:click="eliminarRegistro(item.id)">Eliminar</button>
              </div>

            </div>
          </div> -->
          <RegisterEditForm ref="modifyPopup" />
        </div>
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
    margin-bottom: 100px;
  }

</style>