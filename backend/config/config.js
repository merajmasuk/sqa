require("dotenv").config();

const dev={
    app:{
        port:process.env.PORT||5000
    },
    db:{
    //    url:'mongodb://localhost:27017/SQADB',
        url:`mongodb+srv://summer-school-site:8zCDlFYQCcluSQ7M@cluster11.cpm08j1.mongodb.net/SQADB`||"mongodb://localhost:27017/SQADB",
    }
};

module.exports =dev;
    