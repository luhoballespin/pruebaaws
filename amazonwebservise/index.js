const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("¡Hola desde tu API en AWS porfiin!");
});

app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola mundo desde /saludo" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
