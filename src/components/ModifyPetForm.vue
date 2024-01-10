<script>
export default {
    data() {
    return {
      isVisible: false,
      id: '',
      formData: {
        especie: '',
        nombre: '',
        descripcion: '',
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
      this.formData = { especie: '', nombre: '', descripcion: '', id: '' };
    },
    async submitForm() {
      try{
        const rta =       await fetch(`http://localhost:3000/mascotas/${this.id}`, {method: 'PUT', headers:{"Content-Type": "application/json"}, body: JSON.stringify(this.formData)})
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
        <h2>Edicion de mascota</h2>
      <form @submit.prevent="submitForm">

        <label for="especie">Especie modificada de la mascota:</label>
        <input type="text" id="especie" name="especie" v-model="formData.especie" required>
        <br>
        <label for="nombre">Nombre modificado de la mascota:</label>
        <input type="text" id="nombre" name="nombre" v-model="formData.nombre" required>
        <br>
        <label for="descripcion">Descripcion modificada de la mascota:</label>
        <input type="text" id="descripcion" name="descripcion" v-model="formData.descripcion" required>
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