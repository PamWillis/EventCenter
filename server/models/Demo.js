const { Schema } = require('mongoose');

const demoSchema = new Schema(
    {
    demotitle: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    date: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}
);



module.exports = demoSchema;