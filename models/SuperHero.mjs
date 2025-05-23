import mongoose from 'mongoose';
const paisSchema = new mongoose.Schema({
  name: {
    common: { type: String },
    official: { type: String },
    nativeName: {
      grn: {
        official: { type: String },
        common: { type: String }
      },
      spa: {
        official: { type: String },
        common: { type: String }
      }
    }
  },
  independent: { type: Boolean },
  status: { type: String },
  unMember: { type: Boolean },
  currencies: {
    ARS: {
      name: { type: String },
      symbol: { type: String }
    }
  },
  capital: [{ type: String }],
  region: { type: String },
  subregion: { type: String },
  languages: {
    grn: { type: String },
    spa: { type: String }
  },
  latlng: [{ type: Number }],
  landlocked: { type: Boolean },
  borders: [{ type: String }],
  area: { type: Number },
  flag: { type: String },
  maps: {
    googleMaps: { type: String },
    openStreetMaps: { type: String }
  },
  population: { type: Number },
  gini: { type: Map, of: Number },
  fifa: { type: String },
  timezones: [{ type: String }],
  continents: [{ type: String }],
  flags: {
    png: { type: String },
    svg: { type: String },
    alt: { type: String }
  },
  startOfWeek: { type: String },
  capitalInfo: {
    latlng: [{ type: Number }]
  },
  creador: { type: String },
}, { versionKey: false });

const pais = mongoose.model('Grupo-03', paisSchema, 'Grupo-03');

export default pais;

