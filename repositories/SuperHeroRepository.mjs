import pais from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository {
    

    async obtenerTodos() {
        return await pais.find({"name.nativeName.spa.official":{$exists:true},capital:{$exists:true},creador:"Emiliano"}).lean();
    }

    async crearSuperheroe(superheroe){
        const objetoSuperheroe=superheroe;
        const anio = objetoSuperheroe.anio;
        const gini = objetoSuperheroe.gini;
        const indice = {
            [anio]: gini
        };
            const hero = new pais({
                "name.nativeName.spa.official" : objetoSuperheroe.nombreOficialEspanol,
                "capital": objetoSuperheroe.capital,
                "borders": objetoSuperheroe.fronteras,
                "area": objetoSuperheroe.area,
                "population": objetoSuperheroe.poblacion,
                "gini": indice,
                "timezones": objetoSuperheroe.zonasHorarias,
                "creador": objetoSuperheroe.creador
                
            });
        
           const resultado =  await hero.save();
           return resultado;
        
    }

    async actualizarSuperheroe(id,datosActualizados) {
            const {nombreOficialEspanol,capital,fronteras,area,poblacion,zonasHorarias,creador,anio,gini} = datosActualizados;
            const indice = {[anio]:gini};
            const superheroe = await pais.findOneAndUpdate(

            { _id: id }, 

            { $set: { 
                "name.nativeName.spa.official" : nombreOficialEspanol,
                "capital": capital,
                "borders": fronteras,
                "area": area,
                "population": poblacion,
                "gini": indice,
                "timezones": zonasHorarias,
                "creador": creador
                } 
            },

            { new: true }

          )

          return superheroe; 
    }

    async borrarPorIdSuperheroe(id) {
            const superheroe = await pais.findOneAndDelete(
                { _id: id }, 
                { new: true }
              )
        
              return superheroe;   
}

}
export default new SuperHeroRepository();