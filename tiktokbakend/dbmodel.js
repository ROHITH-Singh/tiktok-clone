 import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const tiktokschema = mongoose.Schema({
    url: String,
    channel: String,
    song: String,
    likes: String,
    messages: String,
    description: String,
    shares: String,
}
)

export default mongoose.model('tiktokvideos', tiktokschema)
// module.exports = mongoose.model('tiktokvideos', tiktokschema);