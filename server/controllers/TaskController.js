const Task= require("../models/Task");
const asyncHandler = require("../middleware/asyncHandler");


const createTask= async(req,res)=>{
    const task= await Task.create({title:req.body.title});
    res.status(201).json(task);
}
// const createTask= async(req,res)=>{
//     try{
//         const task= await Task.create({
//             title: req.body.title,
//         });
//         res.status(201).json(task);
//     }catch(error){
//         res.status(500).json({
//             message:error.messasge,
//         });
//     }
// };

const getTasks= asyncHandler(async(req,res)=>{
    const tasks= await Task.find();
    res.status(200).json(tasks)
})
// const getTasks= async(req,res)=>{
//     try{
//         const tasks =await Task.find();
//         res.status(200).json(tasks);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// };

const  getTaskById= asyncHandler(async(req,res)=>{
    const task= await Task.findById(req.params.id);
    res.status(200).json(task);
})

// const getTaskById= async(req,res)=>{
//     try{
//         const task= await Task.findById(req.params.id);
//         if(!task){
//           return  res.status(404).json({
//                 message:"task not found"
//             })
//         }
//         res.status(200).json(task);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// };


const updateTask= asyncHandler(async(req,res)=>{
    const task= await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true,
            runValidators:true
        }
    );
    if(!task){
        return res.status(404).json({
            message:"Task not found"
        })
    }
    res.json(task);
})
// const updateTask= async(req,res)=>{
//     try{
//         const task= await Task.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators:true});
//         if(!task){
//             return res.status(404).json({
//                 message:"task not found"
//             })
//         }
//         res.status(200).json(task);
    
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// };

const deleteTask= asyncHandler(async(req,res)=>{
    const task= await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"task deleted successfully"})
})

// const deleteTask= async(req,res)=>{
//     try{
//         const task= await Task.findByIdAndDelete(req.params.id);
//         if(!task){
//             return res.status(404).json({
//                 message:"task not found"
//             })
//         }
//         res.status(200).json({message:"task deleted successfully"});
//     }
//     catch(error){
//         res.status(500).json({messasge:error.message})
//     }
// };
module.exports= {createTask, getTasks, getTaskById, updateTask, deleteTask};