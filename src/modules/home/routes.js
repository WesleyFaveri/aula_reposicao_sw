import { get } from 'server/router';
import ctrl from './controller';

export default [
  get('/', ctrl.home),
];
