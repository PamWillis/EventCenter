const { Schema } = require('mongoose');

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date: {
        type: Date, // Change to Date type
        required: true,
    },
    time: {
        type: String, // This could be changed to Date type if needed
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = eventSchema;