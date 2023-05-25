const {generateToken,verifyToken} = require('../helper/token')
const UserModel = require('../models/user.model')

class AuthCtrl {
    static UserLogin(req,res){
        const {email,password} = req.body

        UserModel.findOne({email:`${email}`}).then((res)=>{
            
        })
    }
}