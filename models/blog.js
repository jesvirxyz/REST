const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
    posted_on: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('blog', BlogSchema);
