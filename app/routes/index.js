import express from 'express'
var indexRouter = express.Router();

/* GET home page. */


indexRouter.route('/').get(function (req, res) {
  res.json({"현재 시간 : ": new Date().toLocaleString()})
})


export default indexRouter
