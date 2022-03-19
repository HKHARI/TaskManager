const Task = require('../model/taskmodel');

const getAllTasks = async(request, response) => {
    try{
        const tasks = await Task.find({});
        response.status(200).json({tasks});
    }catch(error){
        response.status(500).json(error);
    }
}

const getTask = async(request, response) => {
    try{
        const task = await Task.findById(request.params.id);
        console.log(task);
        if(!task){
            return response.status(404).send("Task with id: "+request.params.id+" not found");
        }
        response.status(200).json({task});
    }catch(error){
        response.status(500).json(error);
    }
}

const addTask = async(request, response) => {
    try {
        const task = await  Task.create(request.body); 
        response.status(200).json({task});
    }catch(error){
        response.status(500).json(error);
    }
}

const updateTask = async(request, response) => {
    try{
        const task = await Task.findByIdAndUpdate(request.params.id, req.body, {new : true, runValidators : true});
        if(!task){
            return response.status(404).send("Task with id: "+request.params.id+" not found");
        }

        response.status(200).json({task});
    }catch(error){
        response.status(500).json(error);
    }
}

const deleteTask = async(request, response) => {
    try{
        const tasks = await Task.findByIdAndDelete(request.params.id);
        response.status(200).json({tasks});
    }catch(error){
        response.status(500).json(error);
    }
}

module.exports = {
    getAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}