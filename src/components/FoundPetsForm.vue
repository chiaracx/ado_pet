<script>
import axios from 'axios'
export default {
    data() {
    return {
      isVisible: false,
      formData: {
         nombre: '',
         especie: '',
         descripcion: ''
      }
    };
  },
  methods: {
    showForm() {
      this.isVisible = true;
    },
    closeForm() {
      this.isVisible = false;
      this.formData = {};
    },
    async submitForm() {
      try{

        const rta = await axios.post("http://localhost:3000/mascotas", this.formData);
        if(rta.status==200){
          console.log('Form submitted with data:', this.formData);
          this.closeForm();
          window.location.reload(true)
        }

      }catch(e){
        console.log(e);
      }

      
    }
}
}
</script>

<template>
  <div v-if="isVisible" class="popup">
    <div class="popup-content">
        <h2>Formulario de mascota</h2>
      <form>

        <label for="especie">Especie de la mascota:</label>
        <input type="text" id="especie" name="especie" v-model="formData.especie" required>
        <br>
        <label for="nombre">Nombre de la mascota:</label>
        <input type="text" id="nombre" name="nombre" v-model="formData.nombre" required>
        <br>
        <label for="descripcion">Descripcion de la mascota:</label>
        <input type="text" id="descripcion" name="descripcion" v-model="formData.descripcion" required>
        <br>
        <button @click="submitForm">Publicar</button>
      </form>
      
      <button v-on:click="closeForm">Cancelar</button>
    </div>
  </div>
</template>

<style>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.form-title {
    size: 80px
}
</style>