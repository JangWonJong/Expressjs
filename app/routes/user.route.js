const { signup, userlist, profile, login } = require('../controllers/user.controller')
module.exports = x => {x.app.post(`${x.url}/sign-up`, signup)
                       x.app.post(`${x.url}/login`, login)
                       x.app.get(`${x.url}/list`, userlist)
                       x.app.get(`${x.url}/profile/:id`, profile)}


/**
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

