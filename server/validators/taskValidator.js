const {body} =require("express-validator");

const createTaskValidation=[
    body('title').trim().notEmpty().withMessage("Task title is required")
    .isString().withMessage("Task title must be a string").isLength({max:100})
    .withMessage("Task title must be less than 100 characters")
    .matches(/^([0-9]*[a-zA-Z]){1,}[0-9a-zA-Z ]*$/)
    .withMessage("Task title must contain at least some alphabetic letters")
];

module.exports= {createTaskValidation};