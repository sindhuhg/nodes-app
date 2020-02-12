const {User}=require('../models/User')
const _=require('lodash')

module.exports.register=(req,res)=>{
    const body=re.body
    const user=new User(body)
    user.save()
    .then(function(user){
        res.json(user)
    })
    .catch(function(err){
        res.send(err)
    })
}

module.exports.login=(req,res)=>{
    const body=req.body
    User.findByCredentials(body.email,body.password)
    .then(function(user){
        user.generateToken()
    })
    .then(function(token){
        res.send({token})
    })
    .catch(function(err){
        res.send(err)
    })
}


module.exports.account=(req,res)=>{
    const {user}=req
    res.json(user)
}

module.exports.logout=(req,res)=>{
    const{user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
    .then(function(){
        res.send({notice:'successfully logedout'})
    })
    .catch(function(err){
        res.send(err)
    })
}
