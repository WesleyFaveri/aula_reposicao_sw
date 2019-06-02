import carros from './carros/routes';
import marcas from './marcas/routes';
import home from './home/routes';

export default [
  ...home,
  ...carros,
  ...marcas,
];
