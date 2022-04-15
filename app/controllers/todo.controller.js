const db = require('../models/index')
const TodoSchema = db.todo

exports.todoo = (req, res) =>{
    console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
    new TodoSchema(req.body
        ).save(()=>{
            res.status(200).json({'result':'ok'})
        })
}


exports.todolist = (req, res) =>{
    console.log(` ### todoController acess ### `)
    UserSchema.find()
    .exec((err, users)=>{
        if (err) return res.status(400).send(err)
        res.status(200).json({ success: true, todos})
    })
    
}

