import { Client } from 'pg';
import { DATABASE_URL } from '../config';

export const query = (sql, values = []) => {
  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: false,
  });

  client.connect();

  return client.query(sql, values).then((results) => results.rows).catch((err) => {
    return err.message;
  }).then((results) => {
    client.end();
    return results;
  });
};
