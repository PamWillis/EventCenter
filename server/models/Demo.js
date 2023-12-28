const { Schema } = require('mongoose');

const demoSchema = new Schema({
    demotitle: {
        type: String,
        required: true,
        unique: false,
        trim: true
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}
);



module.exports = demoSchema;