const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/NodeJS30`).then(x => console.log("Connected MongoDB.")).catch(err => errorLogger(err));

const User = require(`./Schemas/User`)

var newUser = new User({ 
    id: 1,
    username: `WestyDev`,
    gmail: `westydev@gmail.com`,
    password: `westy123dev`
})

newUser.save()