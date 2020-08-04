const express = require('express');
const router = express.Router();

router.post('/addFavourite', function(req, res){
    return res.send('{"hola" : "holis"}');
})

module.exports = router;