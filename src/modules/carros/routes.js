import { get, post, del, put } from 'server/router';
import ctrl from './controller';

export default [
  get('/api/carros', ctrl.getCarros),
  post('/api/carros', ctrl.insertCarro),
  del('/api/carros/:id', ctrl.deleteCarro),
  put('/api/carros/:id', ctrl.updateCarro),
];
