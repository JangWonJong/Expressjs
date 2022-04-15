const { todolist, todoo } = require('../controllers/todo.controller');
module.exports = x => {x.app.post(`${x.url}/list`, todolist)
                       x.app.post(`${x.url}/do`, todoo) }