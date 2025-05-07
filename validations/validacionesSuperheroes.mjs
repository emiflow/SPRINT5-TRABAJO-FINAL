import { body } from "express-validator";

export const reglasDeValidacion = () => [
    body('nombreOficialEspanol').isLength({min:3,max:90}).withMessage('Ingrese un nombre oficial en español que tenga 3 o mas y 90 o menos caracteres'),

    body('capital')
    .customSanitizer(capital=>capital.split(','))
    .trim()
    .custom((capital)=>{
        capital.forEach(cap => {
            
            if ((cap.length < 3)||(cap.length > 90)) {
                throw new Error('Cada capital debe tener entre 3 y 90 caracteres');
              }
        });
        return true;
    }),
    body('fronteras')
    .optional({ checkFalsy: true })
    .customSanitizer(frontera=>frontera.split(','))
    .trim()
    .custom((fronteras)=>{
        fronteras.forEach(frontera => {
            
            if (!/^[A-Z]{3}$/.test(frontera)) {
                throw new Error('El código de las fronteras debe tener exactamente 3 letras mayúsculas');
              }
        });
        return true;
    }),
    body('area').isFloat({gt:0}).withMessage('El área debe ser un numero positivo'),

    body('poblacion').isInt({gt:0}).withMessage('La población debe ser un numero entero positivo'),

    body('gini')
    .optional({ checkFalsy: true })
    .isFloat({min:0,max:100})
    .withMessage('El Indice Gini debe ser un numero entre 0 y 100'),

    body('zonasHorarias').customSanitizer(frontera=>frontera.split(','))
];


