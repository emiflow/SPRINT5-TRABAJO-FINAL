import superHeroRepository from '../repositories/SuperHeroRepository.mjs';


export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function crearSuperheroe(superheroe) {
    return await superHeroRepository.crearSuperheroe(superheroe);
}

export async function actualizarSuperheroe(id,datosActualizados) {
    return await superHeroRepository.actualizarSuperheroe(id,datosActualizados);
}

export async function borrarPorIdSuperheroe(id) {
    return await superHeroRepository.borrarPorIdSuperheroe(id);
}

