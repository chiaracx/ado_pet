<script>
export default {
    data() {
    return {
      isVisible: false,
      id: '',
      formData: {
        usuarioId: '',
        mascotaEspecie: '',
        mascotaNombre: '',
        mascotaDescripcion: '',
        mascotaId: '',
        fecha: '',
        id: ''
      }
    };
  },
  methods: {
    showForm(id) {
      this.isVisible = true;
      this.id = id;
      this.formData.id = id;
    },
    closeForm() {
      this.isVisible = false;
      this.formData = {};
    },
    async submitForm() {
      try{
        const rta =       await fetch(`http://localhost:3000/registros/${this.id}`, {method: 'PUT', headers:{"Content-Type": "application/json"}, body: JSON.stringify(this.formData)})
        console.log(this.formData);
         if(rta.status == 200){
           console.log('Form submitted with data:', this.formData);
           this.closeForm();
           window.location.reload(true)
         }
      }catch(e){
        console.error('Error al realizar la solicitud:', e.message);
      }
    }
}
}
</script>

<template>
  <div v-if="isVisible" class="popup">
    <div class="popup-content">
        <div class="form-title">Modificar registro</div>
      <form @submit.prevent="submitForm">

        <label for="usuarioId">ID modificada del usuario:</label>
        <input type="text" id="usuarioId" name="usuarioId" v-model="formData.usuarioId" required>
        <br>
        <label for="mascotaEspecie">Especie modificada de la mascota:</label>
        <input type="text" id="mascotaEspecie" name="mascotaEspecie" v-model="formData.mascotaEspecie" required>
        <br>
        <label for="mascotaNombre">Nombre modificado de la mascota:</label>
        <input type="text" id="mascotaNombre" name="mascotaNombre" v-model="formData.mascotaNombre" required>
        <br>
        <label for="mascotaDescripcion">Descripcion modificada de la mascota:</label>
        <input type="text" id="mascotaDescripcion" name="mascotaDescripcion" v-model="formData.mascotaDescripcion" required>
        <br>
        <label for="mascotaId">ID modificada de la mascota:</label>
        <input type="text" id="mascotaId" name="mascotaId" v-model="formData.mascotaId" required>
        <br>
        <label for="fecha">Fecha modificada:</label>
        <input type="date" id="fecha" name="fecha" v-model="formData.fecha" required>
        <br>

        <button type="submit">Modificar</button>
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