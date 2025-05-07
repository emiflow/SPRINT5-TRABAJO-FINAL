import express from 'express';
import {
    obtenerTodosLosSuperheroesController,
    crearSuperheroeController,
    actualizarSuperheroeController,
    borrarPorIdController,
    formularioCrearSuperheroe,
    formularioActualizarSuperheroeController,
    alertaEliminacionSuperheroeController,
    obtenerPaginaPrincipal
} from '../controllers/superheroesController.mjs';

import { reglasDeValidacion } from '../validations/validacionesSuperheroes.mjs';
import { validacionErrores } from '../middlewares/middlewaresSuperheroes.mjs';

const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/formularioCrearSuperheroe',formularioCrearSuperheroe);
router.get('/', obtenerPaginaPrincipal);
router.post('/crearSuperheroe' ,reglasDeValidacion(),validacionErrores, crearSuperheroeController);
router.post('/formularioActualizarSuperheroe',formularioActualizarSuperheroeController);
router.post('/alertaEliminacionSuperheroe',alertaEliminacionSuperheroeController);
router.put('/actualizarSuperheroe/:id',reglasDeValidacion(),validacionErrores,actualizarSuperheroeController);
router.delete('/borrarPorId/:id',borrarPorIdController);
export default router;

