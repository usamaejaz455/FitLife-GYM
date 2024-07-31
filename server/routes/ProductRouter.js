const express = require('express');
const router=express.Router();
const ensureAuthenticated = require("../middlewares/Auth");

// Define routes
router.get('/',ensureAuthenticated,(req,res)=>{
    res.status(200).json([
       { name:"mobile",
        price:100000
       },
       { name:"laptop",
        price:200000
       }
    ])
});

module.exports = router;