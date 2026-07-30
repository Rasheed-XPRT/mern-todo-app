const express= require("express");
const router= express.Router();
const {createTask, getTasks, getTaskById, updateTask, deleteTask}= require("../controllers/taskController");
const { createTaskValidation} = require(
    "../validators/taskValidator"
);
const validate = require("../middleware/validationMiddleware");
router.post("/",createTaskValidation,validate,createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);
module.exports=router;