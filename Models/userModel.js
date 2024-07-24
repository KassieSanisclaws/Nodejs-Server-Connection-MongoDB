const mongodbConnect = require('../MongoDbConfig/config.mongodb');

const userSchema = mongodbConnect.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},{
    timestamps: true
});
  
const User = mongodbConnect.model('User', userSchema);

module.exports = User;