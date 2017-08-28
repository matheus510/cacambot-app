//Require Mongoose
var mongoose = require('mongoose');

//Define schema for the content model.
var Schema = mongoose.Schema;

var ContentSchema = new Schema({
    a_string: String,
    a_date: Date
});

module.exports = {
    ContentSchema
}