const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
const Blogmodel = require("../controller/BlogController");

router.post("/login",userController.login);

router.post("/sineup",userController.sineup);

router.post("/create",Blogmodel.Cearet);

router.get("/getall",Blogmodel.getall);

router.get("/getbyid/:id",Blogmodel.getbyId);

router.put("/update/:id",Blogmodel.Update);

router.delete("/delete/:id",Blogmodel.Delete);

router.get("/getallbyid/:id",Blogmodel.getallbyid);

module.exports = router;