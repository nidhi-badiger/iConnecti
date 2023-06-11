const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : String,
    password :String,
    confirmPassword: String,
    companyname : String,
    companyspocname:String,
    companyspocemail : String,
    companyspocphone : Number,
});

const User = mongoose.model('users' ,userSchema);

module.exports = User;