const { Schema, model } = require('mongoose');



const eventSchema = new Schema({
    title: {
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
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    // set savedUsers to be an array of data that adheres to the userSchema
    savedUsers: [userSchema],
},
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);
// when we query an event, we'll also get another field called `eventCount` with the number of saved demos we have
eventSchema.virtual('userCount').get(function () {
    return this.savedUsers.length;
});



const Event = model('Event', eventSchema);


module.exports = Event;