const { Schema } = require('mongoose');



const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}
);






module.exports = eventSchema;