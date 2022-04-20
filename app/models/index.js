import dotenv from 'dotenv'
const{ MONGO_URI } = process.env
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
//db.user = UserModel(mongoose)
//db.board = require('./board.model')(mongoose)
//db.todo = TodoModel(mongoose)

export default db