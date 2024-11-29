const express = require("express");
const errorHandler=require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
//middleware /api/contacts is the commonly there for all endpoints 
const contactRoutes = require("./routes/contactRoutes");
app.use(express.json())
// Use routes
app.use("/api/contacts", contactRoutes);
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});



