import sha256 from 'sha256'
import { AllFetchDatas, fetch, fetchPost, fetchUPDATE } from '../database/pg.js'
import authModel from '../models/auth.model.js'
import jwtToken from '../utils/jwt.js'

export default {
  REG: async (req, res) => {
    try {
      let { username, login, password } = req.body
      if (!username || !password || !login)
        throw new Error('Invalid username or password')
      let id = await fetch(authModel.REGIST, username, login, sha256(password))
      res.send({
        status: 200,
        message: 'Successfully inserted into database',
        data: {
          token: jwtToken.SIGN(id),
        },
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
      console.log('error :', error.message)
    }
  },
  LOG: async (req, res) => {
    try {
      let { login, password } = req.body
      if (!password || !login) throw new Error('Invalid username or password')
      let id = await fetch(authModel.LOGIN, login, sha256(password))
      if (!id) throw new Error('Not found')
      res.send({
        status: 200,
        message: 'Successfully',
        data: {
          token: jwtToken.SIGN(id),
        },
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
      console.log('error :', error)
    }
  },
  CHECK: (req, res) => {
    try {
      if (!jwtToken.VERIFY(req.headers.token)) throw new Error('Invalid token!')
      res.send({
        status: 200,
        message: 'Success!',
      })
    } catch (error) {
      res.send({ status: 404, message: error.message })
    }
  }
  //   POST: async (req, res) => {
  //     const { name, month, price } = req.body
  //     await fetchPost(QueryFetch.ADDPOST, name, month, price)
  //     res.send({
  //       message: 'data is added successfully',
  //       status: 200,
  //     })
  //   },
  //   DELETE: async (req, res) => {
  //     try {
  //       await fetchPost(QueryFetch.DELETE, req.params.id)
  //       res.status(200).json({ message: 'cuurse deleted' })
  //     } catch (error) {
  //       res.status(500).json({ message: error.message })
  //     }
  //   },
  //   UPDATE: async (req, res) => {
  //     const { id } = req.params
  //     try {
  //       await fetchUPDATE(
  //         'UPDATE course SET name = $1,  month= $2, price = $3 WHERE id = $4',
  //         req.body,
  //         {
  //           id: id,
  //         }
  //       )
  //       res.status(200).json({ message: 'cuurse deleted' })
  //     } catch (error) {
  //       res.status(500).json({ message: error.message })
  //     }
  //   },
}
