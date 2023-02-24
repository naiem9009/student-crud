const router = require('express').Router();

const {
    getStudents,
    createStudents,
    updateStudents,
    deleteStudents,
    editStudent
} = require('../Controllers/students.js')


// get all students
router.get('/', getStudents);


// create students
router.post('/register', createStudents);


// update students
router.put('/:id', updateStudents);

// edit students
router.get('/:id', editStudent);


// delete students
router.delete('/:id', deleteStudents);





module.exports = router;