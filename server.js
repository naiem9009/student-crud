require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const studentRoute = require('./Routers/studentRouters');

// server port
const PORT = process.env.PORT || 3000;




app.use(express.static('public'))
app.set('view engine', 'hbs');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/students', studentRoute)
app.get('/', (req, res) => {
    res.render('index')
})





mongoose.set('strictQuery', false)
mongoose.connect(process.env.db_URL)
    .then((con) => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
            if (con) console.log('database is connected');
        });
    })
.catch(err => {
    console.log(err);
})