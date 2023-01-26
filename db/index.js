import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "yelp",
  password: "contraseña123",
  port: 5432,
});
export default {
  query: (text, params) => pool.query(text, params),
};
