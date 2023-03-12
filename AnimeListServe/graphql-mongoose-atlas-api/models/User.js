const { mongoose, Types } = require('mongoose');

const UserSchema = new mongoose.Schema({
    id:{
        type: Types.ObjectId,
    },
    name:{
        type: String,
    },
    animeid: {
        type: Types.ObjectId,
        ref: 'Anime',
    }
});

module.exports = mongoose.model('User', UserSchema);