const { todolist, todo } = require('../controllers/todo.controller');
module.exports = x => {x.app.post(`${x.url}/todolist`, todolist)
                       x.app.post(`${x.url}/do`, todo) }