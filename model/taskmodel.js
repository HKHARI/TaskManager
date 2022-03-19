const mongoose = require('mongoose');


const  TaskSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please provide value for name'],
        trim : true,
        maxlength:[100, 'Name can not be more than 20 characters'],
    }, 
    status : {
        type : Boolean,
        default : 'false' 
    }
});


module.exports = mongoose.model('Task', TaskSchema);