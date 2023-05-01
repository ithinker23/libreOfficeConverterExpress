const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

const converterRouter = require('./routes/convertRouter');
app.use('/convert', converterRouter);

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);