const express = require('express');
const cors = require('cors');
require("./config/DB");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//authentication
// const {authenticationRouter}=require("./helper/Authorization.route");
// app.use("/api/v1/authentication",authenticationRouter);

//committee group routes
const committeeGroupRoute = require("./routes/committeeGroup.route");
app.use("/api/v1", committeeGroupRoute);

//committee routes
const committeeRoute=require("./routes/committee.route");
app.use("/api/v1", committeeRoute);

//designation routes
const designationRoute=require("./routes/designation.route");
app.use("/api/v1", designationRoute);

//event routes
const eventRoute=require("./routes/event.route");
app.use("/api/v1", eventRoute);

//sponsor routes
const sponsorRoute=require("./routes/sponsor.route");
app.use("/api/v1",sponsorRoute)

//event committee routes
const eventCommitteeRoute=require("./routes/eventCommittee.route");
app.use("/api/v1",eventCommitteeRoute);

//login user route
const userRoute=require("./routes/user.route");
app.use("/api/v1",userRoute);

//forum route
const forumRoute=require("./routes/forum.route");
app.use("/api/v1",forumRoute);

//assessment route
const assessmentRoute=require("./routes/assessment.route");
app.use("/api/v1",assessmentRoute);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

module.exports = app;
