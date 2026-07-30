// const express= require("express");
// const cors= require("cors");

// const app=express();

// //importing the Routes
// const taskRoutes= require("./routes/taskRoutes");


// //Middleware
// app.use(cors());
// app.use(express.json());

// //Test Route
// app.get("/", (req,res)=>{
//     res.send("welcome to the ToDo API");
// });
// app.use("/api/tasks",taskRoutes);
// module.exports=app;
//////////////////////////
const errorHandler = require("./middleware/errorHandler");
const express = require("express");
const cors = require("cors");

const app = express();

// 1. MIDDLEWARE MUST BE FIRST
app.use(cors());
app.use(express.json());

// 2. IMPORT ROUTES AFTER MIDDLEWARE
const taskRoutes = require("./routes/taskRoutes");

// 3. BASE TEST ROUTE
app.get("/", (req, res) => {
    res.send("welcome to the ToDo API, this was a tough bugg");
});

// 4. REGISTER API ROUTES
app.use("/api/tasks", taskRoutes);


app.use(errorHandler);

// 5. EXPORT APP
module.exports = app;
