import { modeloAlumnos } from "../models/alumnos.model.js";

modeloAlumnos.create({
    name:"Leslie",
    apepat: "Arjona",
    edad: 21
});


export const test = ()=>{
    console.log("Se esta mandando a llamar correctamente el controlador")
}