

export default function UserModel(mongoose){
    const UserSchema = mongoose.Schema(
        {userid: String,
            password: String,
            email: String,
            name: String,             
            phone: String,            
            birth: String,
            address: String
            
           }, { timestamps: true}
    )
    return mongoose.model('user', UserSchema)
}




/*const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new Schema({
    username : { type: String, requred : true},
    password : { type: String, requred : true},
    name : { type: String, requred : true},
    telephone :{ type: String, requred : true}
})

let User = mongoose.model('User', UserSchema)
module.exports = User*/