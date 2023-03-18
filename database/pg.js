import pg from 'pg'
const { Pool } = pg
let pool = new Pool({
  user: 'postgres',
  port: 5432,
  database: 'lesson11',
  host: 'localhost',
  password: 'admin',
})
// let pool = new Pool({
//   user: process.env.PG_USER,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE,
//   host: process.env.PG_HOST,
//   password: process.env.PG_PASSWORD,
// })
export async function AllFetchDatas(queryString) {
  let client = await pool.connect()
  try {
    let { rows } = await client.query(queryString)
    return rows
  } catch (error) {
    console.log('error :', error)
  }
}
export async function fetch(queryString, ...params) {
  let client = await pool.connect()
  try {
    let {
      rows: [data],
    } = await client.query(queryString, params.length ? params : null)
    return data
  } catch (error) {
    console.log('error :', error.message)
  } finally {
    console.log("data");
  }
}
export async function fetchPost(queryString, ...params) {
  let client = await pool.connect()
  try {
    await client.query(queryString, params.length ? params : null)
  } catch (error) {
    console.log('error :', error)
  }
}
export async function fetchUPDATE(queryString, ...params) {
  let client = await pool.connect()
  try {
    const id = params[1].id;
    console.log('id :', id);
    const {name, month, price } = params[0];
    await client.query(queryString, [
      name,
      month,
      price,
      id
    ])
  } catch (error) {
    console.log('error :', error)
  }
}
