const express = require("express");
const User = require("../models/User");

const router = express.Router();

//CREATE

router.post("/", async (req, res) =>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(err) {
        res.status(400).json({error:message});
    }
});

//READ (all users)
router.get("/", async (req, res) =>{
    const users = await User.find();
    res.json(users);
});

//READ (single user)
router.get("/:id", async (req, res) =>{
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({msg : " user not found"});
    res.json(user);
});

//UPDATE
router.put(":id", async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true},
       
    );
  res.json(user);
});

//Delete
router.delete("/:id", async (req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.json({msg:"user deleted"});

});

module.exports = router;