const express = require('express');

// express can be easily used in place of body-parser btw
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const db = require('./database');
const productRouter = require('./routes/productRoute');
const todoRouter = require('./routes/todoRoute');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.render('app')
});
app.use('/api/', productRouter)
app.use('/api/', todoRouter);


//Connecting to database
db.on('open', () => {
    console.log("Database connected...")
});
db.on('error', console.error.bind(console, "Database not connected..."))

//Connecting to server
const port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err){
        console.error(err.message)
    }
    console.log(`Server listening on port ${port}`)
});