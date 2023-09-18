const express = require('express');
const mysql = require('mysql');
const cors = require('cors'); // Importa cors

const app = express();
const port = 3000; // Puerto en el que se ejecutará el servidor

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'brandon',
    password: '12345',
    database: 'usuarios',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
  });

  app.post('/agregar-usuario', (req, res) => {
    const { nombre, email } = req.body;
  
    // Realiza la inserción en la base de datos aquí
    // Por ejemplo, con una consulta SQL
  
    // Respuesta de éxito
    res.status(200).json({ mensaje: 'Usuario agregado correctamente' });
  });
  
  
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });