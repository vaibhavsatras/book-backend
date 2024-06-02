const { Authorization } = require("../Auth/auth");
const userModel = require("../model/userSchema")


const userSignup = async (req,resp)=>{


    const {name,email,password} = req.body

    if(!name && !email && !password ) return resp.json({result: 'Please Enter All Data'})

    const mail = await userModel.findOne({email:email})
    if(mail) return  resp.json({result: 'Email Already Exists...'})

    const newUser = new userModel({

        name: name,
        email: email,
        password: password

    })

    const result = await newUser.save()
    
    return resp.json(result)
    
}

const userSignIn = async (req,resp)=>{

        const {email,password} = req.body

        const isMatch  = await userModel.passwordMatch(email,password)
        
        if(!isMatch)
            {
                 resp.json({result: 'User Is Invalid...'})
            }
            else
            {   
                const token = Authorization(isMatch)

                 resp.json({isMatch, token:token})
                 
            }
        
        return isMatch
        
}

module.exports = {

    userSignup,
    userSignIn

}