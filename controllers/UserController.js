const UserModel = require('../models/user.model')

class UserCtrl  {

    static createUser(req, res){
        const user = req.body

        new UserModel(user).save().then((result)=>{
            res.status(201).send({message:"user created",data:{result}})
        }).catch((err)=>{
            res.status(500).send({message:"user not created",error:{err}})
        })
    }
    static fetchUsers(req, res){

        UserModel.find().then((result)=>{
            res.status(201).send({message:"all users",data:{result}})
        }).catch((err)=>{
            res.status(500).send({message:"users not found",error:{err}})
        })
    }
}

module.exports = UserCtrl