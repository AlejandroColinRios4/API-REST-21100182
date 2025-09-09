const express = require('express');
const router = express.Router();


router.post('/',(req, res)=>{
    res.send("hola cliente");

    
});
module.exports = router
