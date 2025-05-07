import { connectDB } from './config/dbConfig.mjs';
import pais from './models/SuperHero.mjs';
const respuesta = await fetch('https://restcountries.com/v3.1/all');
const paises = await respuesta.json();

const paisesFiltrados = paises.filter(pais=>{
    return pais.languages && Object.keys(pais.languages).includes('spa')
})

paisesFiltrados.forEach(pais => {
    delete pais.translations
    delete pais.tld
    delete pais.cca2
    delete pais.ccn3
    delete pais.cca3
    delete pais.cioc
    delete pais.idd
    delete pais.altSpellings
    delete pais.car
    delete pais.coatOfArms
    delete pais.postalCode
    delete pais.demonyms
});

paisesFiltrados.forEach(pais => {
    pais.creador = "Emiliano";
});

connectDB();

paisesFiltrados.forEach(async(elementoPais) => {
    const nuevoPais = new pais(elementoPais);
    await nuevoPais.save();
});
console.log(paisesFiltrados);


