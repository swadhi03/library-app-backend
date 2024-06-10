const mongoose = require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "category" :String,
        "publishyear":String,
        "author":String,
        "description":String,
        "publishername":String,
        "price":String
    }
)

let librarymodule=mongoose.model("libraries",schema)
module.exports={librarymodule}