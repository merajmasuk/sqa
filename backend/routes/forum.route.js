const forumController=require("../controllers/forum.controller");
const router = require('express').Router();

/**
 * Assign Forum Controllers function to different route 
 */
router.post("/setForum",forumController.setForum);
router.get("/getForum",forumController.getForum);
router.put("/updateForum",forumController.updateForum);
router.delete("/deleteForum/:id",forumController.deleteForum);
module.exports=router;
