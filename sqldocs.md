# Tabelas

CREATE TABLE marcas (
  id SERIAL not null primary key,
  nome text UNIQUE
);

CREATE TABLE carros (
  id SERIAL not null primary key,
  modelo text not null,
  ano integer not null,
  motor text not null,
  id_marca integer not null references marcas(id)
);
