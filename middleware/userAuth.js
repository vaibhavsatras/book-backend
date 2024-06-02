const { Authintication } = require("../Auth/auth")

const userAuthorization = (req,resp,next)=>{

    const token = req.headers['authorization']
    if(!token) throw new Error('Token is Not Found')
    
    const user = Authintication(token)
    if(!user) throw new Error('User Is Invalid')
    
    req.user = user

    next()
}

module.exports = {

userAuthorization

}