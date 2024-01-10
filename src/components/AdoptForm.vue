<script>
import axios from 'axios'
export default {
    data() {
    return {
      isVisible: false,
      nombre: '',
      raza: '',
      formData: {
        usuarioId: '1', //incluir valor preset
        mascotaEspecie: '',
        mascotaNombre: '',
        mascotaDescripcion: '',
        mascotaId: '',
        fecha: '',
      }
    };
  },
  methods: {
    showForm(mascota, userId) {
      this.isVisible = true;
      this.nombre = this.formData.mascotaNombre = mascota.nombre;
      this.raza = this.formData.mascotaEspecie = mascota.especie;
      this.formData.mascotaDescripcion = mascota.descripcion;
      this.formData.mascotaId = mascota.id;
      this.formData.usuarioId = userId;
      this.formData.fecha = new Date().toISOString().split('T')[0]
    },
    closeForm() {
      this.isVisible = false;
      this.formData = {};
      this.formData.fecha = new Date().toISOString().split('T')[0]
    },
     async submitForm() {
      try{
        const rta =  await fetch('http://localhost:3000/registros', {method: 'POST', headers:{"Content-Type": "application/json"}, body: JSON.stringify(this.formData)})
        //const datos = await axios.post("http://localhost:3000/registros", JSON.stringify(this.formData) )
        console.log(rta.status);
        if(rta.status == 200){
          console.log('Form submitted with data:', this.formData);
          this.closeForm();
          window.location.reload(true)
        } 
      }
      catch(error){
        console.error('Error al realizar la solicitud:', error.message);
      }
    }
}
}
</script>

<template>
  <div v-if="isVisible" class="popup">
    <div class="popup-content">
        <div class="form-title">Adopte a {{ this.nombre }}, el {{ this.raza }}</div>
      <form>

        <label for="usuarioId">ID de usuario:</label>
        <input type="text" id="usuarioId" name="usuarioId" v-model="formData.usuarioId" readonly>
        <br>
        <label for="mascotaEspecie">Especie de la mascota:</label>
        <input type="text" id="mascotaEspecie" name="mascotaEspecie" v-model="formData.mascotaEspecie" readonly>
        <br>
        <label for="mascotaNombre">Nombre de la mascota:</label>
        <input type="text" id="mascotaNombre" name="mascotaNombre" v-model="formData.mascotaNombre" readonly>
        <br>
        <label for="mascotaDescripcion">Descripcion de la mascota:</label>
        <input type="text" id="mascotaDescripcion" name="mascotaDescripcion" v-model="formData.mascotaDescripcion" readonly>
        <br>
        <label for="mascotaId">ID de la mascota:</label>
        <input type="text" id="mascotaId" name="mascotaId" v-model="formData.mascotaId" readonly>
        <br>
        <label for="fecha">Fecha:</label>
        <input type="date" id="fecha" name="fecha" v-model="formData.fecha" readonly>
        <br>

        <button @click="submitForm">Adoptar</button>
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