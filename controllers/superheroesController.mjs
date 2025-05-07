import { obtenerTodosLosSuperheroes,crearSuperheroe, actualizarSuperheroe,borrarPorIdSuperheroe } from '../services/superheroesService.mjs';

export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const paises = await obtenerTodosLosSuperheroes();
        res.render('dashboard', {paises,title:'Lista Paises'});
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los Paises', error: error.message });
    }
}

export async function crearSuperheroeController(req, res) {
    try {
        const creandoSuperheroe = await crearSuperheroe(req.body);
        res.redirect('http://localhost:3000/heroes');
    } catch (error) {
        res.status(500).send({mensaje:'Error al crear un pais nuevo', error: error.message});
    }
}

export async function actualizarSuperheroeController(req, res) {
    try {
    const {id}= req.params;
    const datosActualizados = req.body;
    const resultado = await actualizarSuperheroe(id,datosActualizados);
    res.redirect('http://localhost:3000/heroes');
    } catch (error) {
        res.status(500).send({mensaje:'Pais con ID incorrecto o inexistente'}); 
    }
    
}
export async function borrarPorIdController(req, res) {
    const {id}= req.params;
    const confirmar = req.body.confirmacion;
     if(confirmar==='SI'){
        try{
        
            const resultado = await borrarPorIdSuperheroe(id);
             if(resultado===null){
                res.status(500).send({mensaje:'Ya ha sido borrado el pais con ese ID'}); 
            }
            else{
                res.redirect('http://localhost:3000/heroes');
            }
        }
        catch(error){
            res.status(500).send({mensaje:'No existe pais con ese ID para borrar'}); 
        }
     }
     else{
         res.redirect('http://localhost:3000/heroes');
     }
}


export async function formularioCrearSuperheroe(req,res){
    res.render('addSuperhero',{title:'Agregar Pais'});
}

export async function formularioActualizarSuperheroeController(req,res){
    const datos = req.body;
    res.render('editSuperhero',{datos,title:'Actualizar Pais'});
}

export async function alertaEliminacionSuperheroeController(req,res){
    const idNombreSuperheroe = req.body;
    res.render('alertaEliminacionSuperheroe',{idNombreSuperheroe,title:'Borrar Pais'});
}

export async function obtenerPaginaPrincipal(req, res){
    res.render('index', {title: 'Página Principal'})
  }
