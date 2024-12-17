const mongoose = require("mongoose");
const BlogSchema = require("../schema/BlogSchema");

const BlogModel = mongoose.model("Blog",BlogSchema);


module.exports = BlogModel;




