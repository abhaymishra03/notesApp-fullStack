const app = require("./src/app");

const PORT = 5000;

const connectDb=require("./src/db/db");

connectDb();
app.listen(PORT,()=>{

    console.log(`Server is running on the port ${PORT}`);
    
});

