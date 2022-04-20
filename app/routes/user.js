import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import UserService from '../services/userService.js'

dotenv.config()
const corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors())
app.post('/user', cors(corsOptions),(req,res)=>{
    const service = new UserService()
    res.status(200).json(service.join(req,res))
})
app.get('/list', cors(corsOptions),(req, res)=>{
    const service = UserService()
    res.status(200).json(service.getUser(req,res))
})

export default app
/*const { signup, userlist, profile, login } = require('../controllers/user.controller')
module.exports = x => {x.app.post(`${x.url}/sign-up`, signup)
                       x.app.post(`${x.url}/login`, login)
                       x.app.get(`${x.url}/list`, userlist)
                       x.app.get(`${x.url}/profile/:id`, profile)}*/


/**
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

