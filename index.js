const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const db = require('./database');
const productRouter = require('./routes/productRoute');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyPraser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello, Backend Devs!")
});


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
})