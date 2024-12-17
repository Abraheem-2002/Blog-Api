const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
     titel : {
       type : String
     },
     content : {
        type : String
    },
     date : {
        type :Date
     },
     createbyid : {
        type : String
     },
     imge : {
        type : String,
     },

})

module.exports = BlogSchema;