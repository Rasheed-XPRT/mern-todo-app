const connectDB = require("../server/config/db");
const app = require("../server/app");

let connected = false;

module.exports = async (req, res) => {

    if(!connected){
        await connectDB();
        connected = true;
    }

    return app(req,res);
};