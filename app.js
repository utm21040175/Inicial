import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors";
import {test} from "./Backend/controllers/alumnos.controller.js"

//para activar el archivo env para la base de datos 
dotenv.config();

//CONEXION A LA BASE DE DATOS 
mongoose.connect(process.env.urlbd)
.then(()=>{ 
    console.log("Funciona la conexion")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
});

//crear un servidor local 
const app = express();
app.use(cors()); //seguridad del servidor local

app.listen(4000, ()=>{
    console.log("Se escucha correctamente")
})

//Mandamos a llamar 
test()