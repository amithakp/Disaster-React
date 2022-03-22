const express = require('express');
const router =  express.Router();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('./userModal');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json())//post call

//get all users http://localhost:5000/api/auth/users
router.get('/users',(req, res) => {
    User.find({},(err,data) => {
        if(err) throw err;
        res.send(data);
    })
})

//register user http://localhost:5000/api/auth/register
router.post('/register',(req, res) => {
    //encrypt Password
    var hashpassword = bcrypt.hashSync(req.body.password,8);
    var email =req.body.email
    User.find({email:email},(err,data) => {
        if(data.length>0){
            console.log(data)
            res.status(500).send({auth:false,token:'Email Already Token'})
        }else{
            User.create({
                name: req.body.name,
                email: req.body.email,
                password:hashpassword,
                role:req.body.role?req.body.role:'Volunteer'
            },(err,data) => {
                if(err) return res.status(500).send('Error While Register')
                res.status(200).send('Register Successful')
            })
        }
    })
})

//login user http://localhost:5000/api/auth/login
router.post('/login',(req, res) => {
    User.findOne({email:req.body.email},(err,user) => {
        console.log(user)
        if(err) return res.status(500).send({auth:false,token:'Error while login'});
        console.log(user);
        if(!user) return res.status(500).send({auth:false,token:'No user found'});
        else{
            //compare password and compare role
            // const roleIsValid =(req.body.role === user.role)
            const passIsValid = bcrypt.compareSync(req.body.password,user.password)
            // if(!roleIsValid){
            //     return res.status(500).send({auth:false,token:'invalid role'}); 
            // }
            // if(!roleIsValid) return res.status(500).send({auth:false,token:'invalid role'});
            if(!passIsValid){
                return res.status(500).send({auth:false,token:'Invalid password'});
            }else{
            // in case password is valid
                var token = jwt.sign({id:user._id},config.secret, {expiresIn:86400}) //24 hr
                res.send({role:user.role,auth:true,token:token})
            }                
        }
    })
})

//Profile  http://localhost:5000/api/auth/userInfo
router.get('/userInfo',(req,res) => {
    var token = req.headers['x-access-token']
    if(!token)  return res.status(500).send({auth:false,token:'No Token Provided'})
    // verify token
    jwt.verify(token, config.secret, (err,user) =>{
        if(err) res.status(500).send({auth:false,token:'Invalid Token'})
        User.findById(user.id,(err,result) => {
            res.send(result)
        })
    })
})

module.exports = router;