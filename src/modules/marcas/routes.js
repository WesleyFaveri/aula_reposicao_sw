import { get, post, del, put } from 'server/router';
import ctrl from './controller';

export default [
  get('/api/marcas', ctrl.getMarcas),
  post('/api/marcas', ctrl.insertMarca),
  del('/api/marcas/:id', ctrl.deleteMarca),
  put('/api/marcas/:id', ctrl.updateMarca),
];
