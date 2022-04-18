module.exports = mongoose => mongoose.model(
    'board',
    mongoose.Schema(
        {userid: String,
            title: String,
            name: String,
            teamId: String,
            subject: String             
        }, { timestamps: true}
    )
)