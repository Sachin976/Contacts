const mongoose = require('mongoose')
const connectionURL = "mongodb+srv://Sachin97659:<password>@cluster0.edxeh.mongodb.net/Contacts?retryWrites=true&w=majority"
mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
})

