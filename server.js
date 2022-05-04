require("dotenv").config()
const cors = require("cors")
const express = require("express")
const mongoose = require("mongoose")

//crear server
const app = express();
const port = 3030;

//conexión a la BD
mongoose.connect("mongodb+srv://marisolcasanova:casanovasa@cluster0.nf93k.mongodb.net/tareas?retryWrites=true&w=majority", {useNewUrlParser: true});
const db = mongoose.connection;

//setear manejo de eventos 
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos"));

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Rutas
app.use("/tareas", require("./routes/tareas-routes"));


//Iniciar el servidor
app.listen(port, () => console.log("El servidor está escuchando..."));
