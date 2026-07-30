require("dotenv").config();
const app= require("./app");
const connectDB= require("./config/db");

const PORT=process.env.PORT || 5000;
//connect to database
 connectDB()
  .then(() => {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`🚀 Server is officially listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ App initialization failed:", err);
  });
