import { defineStore } from 'pinia'
import axios from 'axios'
export const mascotaStore = defineStore('mascota', {
    //Guardo que usuario es y un metodo para ver si esta logueado o no
    state: () => {
        return {
        }
    },
    actions: {
        async adopt(id) {
            try {
                const fullUser = await axios.post("http://localhost:3000/login", usuario);
                console.log(usuario);
                console.log(fullUser.data.id);
                const datos = await (await axios.post("http://localhost:3000/login2", fullUser.data))
                console.log(datos);
                if (datos.status == 200) {
                    this.estaLogeado = true;
                    this.usuario.email = usuario.email;
                    localStorage.setItem('usuario', JSON.stringify(
                        { id: fullUser.data.id ,email: fullUser.data.email, token: datos.data.token}))
                } else {
                    this.estaLogeado = false;
                }
            } catch (e) {
                console.log(e);
            }
        },
        async modify(id) {
            try {
                
                const datos = await axios.post("http://localhost:3000/usuarios/", usuario);
                console.log(usuario);
                console.log(datos);
                if (datos.status == 201) {
                    this.estaLogeado = true;
                    this.usuario.email = usuario.email;
                    localStorage.setItem('usuario', JSON.stringify(
                        { email: usuario.email, token: datos.data.token}))
                } else {
                    this.estaLogeado = false;
                }
            } catch (e) {
                console.log(e);
            }
        },
        async update(usuario) {
            try {
                const id = JSON.parse(localStorage.getItem('usuario')).id;
                console.log(id);
                const datos = await axios.put(`http://localhost:3000/usuarios/${id}`, usuario);
                console.log(usuario);
                console.log(datos);
                if (datos.status == 200) {
                    this.estaLogeado = true;
                    this.usuario.email = usuario.email;
                    localStorage.setItem('usuario', JSON.stringify(
                        { email: usuario.email, token: datos.data.token}))
                } else {
                    this.estaLogeado = false;
                }
            } catch (e) {
                console.log(e);
            }
        },
        async delete(id) {
            try {
                const id = JSON.parse(localStorage.getItem('usuario')).id;
                console.log(id);
                const datos = await axios.delete(`http://localhost:3000/usuarios/${id}`);
                console.log(datos);
                if (datos.status == 200) {
                    this.estaLogeado = false;

                    // localStorage.setItem('usuario', JSON.stringify(
                    //     { email: usuario.email, token: datos.data.token}))
                }
            } catch (e) {
                console.log(e);
            }
        }
    }
})