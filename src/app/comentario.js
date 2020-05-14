import {fetch as fetchPolyfill} from 'whatwg-fetch'

class Comentario{
    
   async obtenerCategorias(){
        const res = await window.fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/categories')
        const categorias = await res.json();
        return categorias;
    }
}
 
export default Comentario;