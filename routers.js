import express from "express";
import multer from "multer"

const {upload, single} = multer;

const routers = express.Router();

routers.post("/upload", upload.single("file"), function(req, res){
    console.log(req.body)
});

export default routers;