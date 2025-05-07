import express from 'express';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';

const app = express();
app.set('views', path.resolve('./views'));
app.set('view engine' , 'ejs');
app.use(expressLayouts);
app.set('layout','layout');
app.use(express.static(path.resolve('./public')));
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true })); // Para formularios URL-encoded
app.use(methodOverride('_method'));
// Middleware para parsear JSON
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Configuración de rutas
app.use('/', superHeroRoutes);


app.use((req, res) => {
    res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor levantado en el puerto :${PORT}, desde el servidor`);
});
