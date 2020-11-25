const express = require('express');
const path = require('path');
const logger = require('./mongo');

const router = express.Router();

router.get('/', async (req,res) => {

    const check = await logger.find().sort({winrate:-1})
    res.send(check);
})



module.exports = router;