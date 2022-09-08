import mongoose from 'mongoose';
const {Schema} = mongoose;

const postSchema  = Schema({
    Desc: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true

    },

    media: {
        type: String
    },

    likes: [],
    comments: []

}, {timestamps: true});

const post = mongoose.model('post', postSchema)

export default post;

