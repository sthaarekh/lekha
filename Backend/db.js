const mongoose = require('mongoose');
const mongooseURI = "mongodb://0.0.0.0:27017/lekha";

const connectToMongo=async()=>{
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(mongooseURI);
        console.log("Connected to Mongo Successfully!");
      } catch (error) {
        console.log(error);
      }
    }
module.exports = connectToMongo;