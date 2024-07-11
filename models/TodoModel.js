const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        task: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true } // Inclusion of timestamps
);

module.exports = mongoose.model('Todo', UserSchema);