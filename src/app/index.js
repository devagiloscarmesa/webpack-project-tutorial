import Comentario from './comentario';

import './style.css';
async function inicio(){
    const com = new Comentario();
    const res = await com.obtenerCategorias();
    console.log(res.categories);
}
console.log("Entrro!!!");


let  saludo =  "    Hola Todos";
console.log(saludo.trimStart());


let greeting = "Hola Todos    ";
console.log(greeting.trimEnd());


inicio();