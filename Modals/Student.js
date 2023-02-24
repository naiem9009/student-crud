const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    roll: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    number: {
        type: String,
        require: true
    },

    department: {
        type: String,
        require: true
    },

    semister: {
        type: String,
        require: true
    },
    date: {
        type: String,
        default: new Date(Date.now())
    }
})


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;