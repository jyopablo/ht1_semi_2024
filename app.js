const express = require('express');
const app = express();
const port = 2021;

// Endpoint GET /api
app.get('/', (req, res) => {
  const data = {
    Instancia: "Instancia #2 - API #2",
    Curso: "Seminario de Sistemas 1",
    Estudiante: "Estudiante - <201901374>"
  };
  res.json(data);
});

app.get('/check', (req, res) => {
  res.status(200).json({status:'OK'})
});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});