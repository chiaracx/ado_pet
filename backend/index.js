import express from 'express'
import cors from 'cors'
import jsonwebtoken from 'jsonwebtoken';
import axios from 'axios';

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

// base de prueba en memoria
/*const users = [
  {email:'admin@test.com',password:'1234','rol':'admin'},
  {email:'user@test.com',password:'1234','rol':'user'},
]*/

app.post('/login2',async (req,res) =>{
  console.log(req.body);
  if(req.body) {
    const user = req.body;
    const id = user.id;
    console.log(id);
    const userMock = await axios.get('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/usuario/'+id);
    console.log(userMock);
    if(userMock) {
      const token = jsonwebtoken.sign({email:user.email,rol:'adm'},'clave_secreta')
        res.json({token:token})
    } else {
    res.status(400).json({message:'error'})
  }
}
})

app.post('/login',async (req,res) =>{
  console.log(req.body);
  if(req.body) {
    const user = req.body;
    const password = user.password
    const email = user.email
    const users = await axios.get('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/usuario')
    
    for(var i = 0; i < users.data.length; i++) {
      if(users.data[i].email == email && users.data[i].password == password) {
        console.log('usuario encontrado');
        res.status(200).json(users.data[i]);
        return users.data[i];
      }
    }
      //res.status(400).json({message:'error'})
  } else {
    res.status(400).json({message:'error'})
  }
})

//////////////////////////////////////////USUARIOS//////////////////////////////////////////////
app.get('/usuarios', async (req, res) => {
  try {
    const response = await axios.get('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/usuario');
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud GET:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
app.post('/usuarios', async (req, res) => {
  try {
    const response = await axios.post('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/usuario', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
app.put('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.put(`https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/usuario/${id}`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud PUT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.delete(`https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/usuario/${id}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud DELETE:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})

////////////////////////////////////MASCOTAS/////////////////////////////////////////////
app.get('/mascotas', async (req, res) => {
  try {
    const response = await axios.get('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas');
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud GET:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
app.delete('/mascotas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.delete(`https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas/${id}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud PUT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
app.post('/mascotas', async (req, res) => {
  try {
    const response = await axios.post('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
app.put('/mascotas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.put(`https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas/${id}`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud PUT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
//////////////////////////////////////////FORMULARIOS//////////////////////////////////////////////////
app.post('/registros', async (req, res) => {
  try {
    const registro = req.body;
    const mascotaId = registro.mascotaId;

    const mascota = await axios.get('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas/' + mascotaId);

    if (mascota.body !== null) {
      const response = await axios.post('https://6555589284b36e3a431db737.mockapi.io/registros', req.body);
      const mascotaBorrada = await axios.delete('https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas/' + mascotaId);
      res.status(200).json(response.data);
    } else {
      res.status(404).json({ error: 'Mascota no encontrada' });
    }
  } catch (error) {
    console.error('Error al realizar la solicitud POST:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});
app.put('/registros/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.put(`https://6555589284b36e3a431db737.mockapi.io/registros/${id}`, req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error al realizar la solicitud PUT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////
app.delete('/registros/:registroId', async (req, res) => {
  try {
    const registroId = req.params.registroId;
    const registro = await axios.get(`https://6555589284b36e3a431db737.mockapi.io/registros/${registroId}`);
    if (registro.data !== null) {
      // Extraer los datos necesarios de la respuesta
      const { usuarioId, mascotaEspecie, mascotaNombre, mascotaDescripcion, mascotaId, fecha, id } = registro.data;
      const bodyJson = { nombre: mascotaNombre , especie: mascotaEspecie, descripcion: mascotaDescripcion };
      // Crear de nuevo a la mascota
      const mascotaCreada = await axios.post("https://654c0cda77200d6ba85878a8.mockapi.io/api/v1/mascotas", bodyJson);
      const registroBorrado = await axios.delete(`https://6555589284b36e3a431db737.mockapi.io/registros/${registroId}`);
      res.status(200).json(mascotaCreada.data);

    } else{
      res.status(404).json({ error: 'Registro no encontrado' });
    }
  } catch (error) {
    console.error('Error al realizar la solicitud DELETE:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log('Example app listening on port ${port}')
})