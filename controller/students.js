import { AllFetchDatas, fetch } from '../database/pg.js'
import studentsModel from '../models/students.model.js'
export default {
  GET: async (req, res) => {
    if (req.params.id) {
      res.send({
        data: await fetch(studentsModel.SELECTID, req.params.id),
      })
    } else {
      res.send({
        data: await AllFetchDatas(studentsModel.SELECTALL),
      })
    }
    // res.send({
    //   data: await AllFetchDatas('SELECT * from students'),
    // })
  },
}
