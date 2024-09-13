const mongoose = require('mongoose');
const urlbd = "mongodb://localhost:27017/UTMA"

//CONEXION A LA BASE DE DATOS 
mongoose.connect(urlbd)
.then(()=>{ 
    console.log("Funciona la conexion")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
})

const EsquemaAlumnos = new mongoose.Schema({
    name:{
        type: String
    },
    apepat:{
        type: String
    },
    edad:{
        type: Number
    }
})
//REUTILIZAR ESQUEMAS 
const modeloAlumnos = new mongoose.model("Tabla de Alumnos", EsquemaAlumnos)

modeloAlumnos.create({
    name:"Leslie",
    apepat: "Arjona",
    edad: 21
})