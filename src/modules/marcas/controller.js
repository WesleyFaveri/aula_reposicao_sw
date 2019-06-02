import { query } from '../../database';

const getMarcas = () =>  query('select * from marcas ');

const insertMarca = (ctx) => {
  const { nome } = ctx.data;
  return query('insert into marcas(nome) values($1)', [nome]);
};

const deleteMarca = (ctx) => {
  const { id } = ctx.params;

  return query('delete from carros where id_marca = $1', [id]).then(() => {
    return query('delete from marcas where id = $1', [id]);
  });
};

const updateMarca = (ctx) => {
  console.log(ctx);
  const { id } = ctx.params;
  const { nome } = ctx.data;

  return query('update marcas set nome = $2 where id = $1', [id, nome]);
};

export default {
  getMarcas,
  insertMarca,
  deleteMarca,
  updateMarca,
};
