import{Schema, model} from "mongoose"


const EsquemaAlumnos = new Schema({
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
export const modeloAlumnos = new model("Tabla de Alumnos", EsquemaAlumnos);