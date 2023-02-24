const Student = require('../Modals/Student');




// get all student controller
const getStudents = async (req, res) => {
    const getStudents = await Student.find();
    getStudents.reverse();

    if (!getStudents) throw new Error('No students found');

    res.render('students-list', {
        getStudents
    });
}


// post student controller
const createStudents = async (req, res) => {
    const {name, roll, email, number, department, semister} = req.body;

    const newStudent = new Student({name, roll, email, number, department, semister});

    const findStudent = await Student.findOne({email})
    
    if (findStudent) throw new Error(`Email already exists`);

    const createStudent = await newStudent.save();

    if(!createStudent) throw new Error("Student save failed");

    res.status(201).redirect('/students');;
}


// find for students edit
const editStudent = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const findOneStudent = await Student.findOne({_id: id});

    res.status(200).render('update', {
        findOneStudent
    })
}

// update student controller
const updateStudents = async (req, res) => {
    const id = req.params.id;
    const {name, roll, email, number, department, semister} = req.body;

    const findOneStudent = await Student.findOne({_id: id})

    if (findOneStudent) {
        const updatedStudent = await findOneStudent.updateOne({
            name, roll, email, number, department, semister
        })
        console.log(updatedStudent);
    } else {
        throw new Error('Student not found');
    }
    
}


// delete student controller
const deleteStudents = (req, res) => {}












module.exports = {
    getStudents,
    createStudents,
    updateStudents,
    deleteStudents,
    editStudent
}