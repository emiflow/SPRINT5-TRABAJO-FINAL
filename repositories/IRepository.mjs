class IRepository {
    obtenerTodos() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }
    crearSuperheroe(superheroe){
        throw new Error("Método 'crearSuperheroe()' no implementado");
    }
    actualizarSuperheroe(id,datosActualizados){
        throw new Error("Método 'actualizarSuperheroe()' no implementado");
    }
    borrarPorIdSuperheroe(id){
        throw new Error("Método 'borrarPorIdSuperheroe()' no implementado");
    } 
}

export default IRepository;
