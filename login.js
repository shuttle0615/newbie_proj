const express = require('express');
const path = require('path');
const logger = require('./mongo');

const router = express.Router();

router.post('/createUser' , async (req,res) => {

    console.log('got request')

    const check = await logger.find({
        username: req.body.username
    })

    if (check.length === 0){
        const user1 = new logger({
            username: req.body.username ,
            password: req.body.password,
            winrate: 0
        })
    
        console.log(req.body.username)
        console.log(req.body.password)
        await user1.save();
    
        res.status(200);
        res.send({
            msg:"user created!",
            state:"true",
            user: user1
        });
    }else{
        res.status(400);
        res.send({
            msg: "username already exist...",
            state: "false"
        })
    }
})

router.post('/login' , async (req,res) => {

    console.log('got login request')

    const check = await logger.find({
        username: req.body.username
    })


    if (check.length === 0){

        res.status(400);
        res.send({
            msg: "username does not exist...",
            state : "false"
        })

    } else{

        if(parseInt(req.body.password) == check[0].password){

            const update = await logger.findOneAndUpdate(
                {username:req.body.username},
                {winrate:req.body.winrate}
            )

            res.status(200);
            res.send({
                msg: "successfully logged in!",
                state: "true",
                user: check[0]
            });
            

        }else{
            res.status(400);
            res.send({
                msg: "password error" ,
                state : "false"
            })
        }
    }
})

module.exports = router;