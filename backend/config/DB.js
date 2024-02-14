const mongoose=require("mongoose");
const config=require("./config");

const DbURL=config.db.url;


mongoose.connect(DbURL)
.then(()=>{
    console.log("Mongoose is connect");
})
.catch(error=>{
    console.log(`db not connected ${error}`);
    process.exit(1);
});