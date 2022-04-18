const { todolist, todo } = require('../controllers/todo.controller');
module.exports = x => {x.app.get(`${x.url}/list`, todolist)
                       x.app.post(`${x.url}/do`, todo) }