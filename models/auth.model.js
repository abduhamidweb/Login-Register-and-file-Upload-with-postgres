export default {
  REGIST:
    'INSERT INTO users (username, login, password) VALUES ($1,$2,$3) RETURNING id',
  LOGIN: 'SELECT id FROM users WHERE login = $1 and password = $2',
}
// module.exports = {
//   REGIST:
//     'INSERT INTO users (username, login, password) VALUES ($1,$2,$3) RETURNING id',
//   LOGIN: 'SELECT id FROM users WHERE login = $1 and password = $2',
// }
