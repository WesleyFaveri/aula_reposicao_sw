import { query } from '../../database';

const getCarros = () =>  query('select carros.*, marcas.nome as nome_marca from carros inner join marcas on (carros.id_marca = marcas.id) ');

const insertCarro = (ctx) => {
  const { modelo, ano, motor, id_marca } = ctx.data;
  return query('insert into carros(modelo, ano, motor, id_marca) values($1, $2, $3, $4)', [modelo, ano, motor, id_marca]);
};

const deleteCarro = (ctx) => {
  const { id } = ctx.params;
  return query('delete from carros where id = $1', [id]);
};

const updateCarro = (ctx) => {
  const { id } = ctx.params;
  const { modelo, ano, motor, id_marca } = ctx.data;

  return query('update carros set modelo = $2, ano = $3, motor = $4, id_marca = $5 where id = $1', [id, modelo, ano, motor, id_marca]);
};

export default {
  getCarros,
  insertCarro,
  deleteCarro,
  updateCarro,
};
