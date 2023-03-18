export default {
  SELECTID: 'Select * from users where id = $1',
  SELECTALL: 'SELECT * from users',
  ADDPOST: 'INSERT into users (name, month, price) VALUES ($1, $2, $3)',
  DELETE: 'DELETE FROM users WHERE id = $1',
  UPDATE:
    'UPDATE users SET name = $1,  month= $2, price = $3 WHERE id = $4',
}