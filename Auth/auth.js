
const jwt = require('jsonwebtoken')
const key = process.env.key


const Authorization = (user)=>{

  
    const token = jwt.sign({

        _id: user._id,
        name: user.name,
        email: user.name

    },key)

    return token

}

const Authintication = (tok)=>{

        const user = jwt.verify(tok,key)

        if(!user) throw new Error('User Is Invalid...');

        return user

}

module.exports = {

        Authorization,
        Authintication

}