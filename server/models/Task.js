
const mongoose= require("mongoose");
const taskSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
}, { 
    timestamps: true // 🚀 This automatically generates createdAt and updatedAt fields
}
);

const task=mongoose.model("Task",taskSchema);
module.exports=task;