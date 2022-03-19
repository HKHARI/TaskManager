const express   = require('express');
const taskRouter = require('./router/taskRouter');
const connectDB = require('./database/connectionSetup');
require('dotenv').config();

const port      = 8211;
const app       = express();

//Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use('/api/v1/tasks', taskRouter);

//Initialization
const init = async() => {
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => { 
            console.log('Server is listening to the port :'+port);
        });
    }catch(error){

    }
}

init();
