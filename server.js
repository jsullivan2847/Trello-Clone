//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const taskController = require('./controllers/task');
const app = express();
require('dotenv').config();


//MIDDLEWARE
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public/'));
app.use('/tasks', taskController);

//DB CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log('somethings wrong', error.message));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//LISTENER
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('express is listening  at ', PORT);
})
