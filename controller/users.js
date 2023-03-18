import { AllFetchDatas, fetch, fetchPost, fetchUPDATE } from '../database/pg.js'
import QueryFetch from '../models/users.model.js'
export default {
  GET: async (req, res) => {
    if (req.params.id) {
      res.send({
        data: await fetch(QueryFetch.SELECTID, req.params.id),
      })
    } else {
      res.send({
        data: await AllFetchDatas(QueryFetch.SELECTALL),
      })
    }
  },
  POST: async (req, res) => {
    const { name, month, price } = req.body
    await fetchPost(QueryFetch.ADDPOST, name, month, price)
    res.send({
      message: 'data is added successfully',
      status: 200,
    })
  },
  DELETE: async (req, res) => {
    try {
      await fetchPost(QueryFetch.DELETE, req.params.id)
      res.status(200).json({ message: 'cuurse deleted' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
  UPDATE: async (req, res) => {
    const { id } = req.params
    try {
      await fetchUPDATE(
        'UPDATE course SET name = $1,  month= $2, price = $3 WHERE id = $4',
        req.body,
        {
          id: id,
        }
      )
      res.status(200).json({ message: 'cuurse deleted' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  },
}
