const mongoose = require('mongoose')
const { createHmac } = require('crypto')


const userSchema = new mongoose.Schema({

        name:{
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true,
            unique: true
        },
        password:{

            type: String,
            required: true

        },
        sallt:{
            type: String
        }

},{timestamps: true})



userSchema.pre('save', function(next){

        const user = this
        if(!user) throw new Error('User Does Not Exists...');

        const salt = 'ggsvvsrvhytefgrs';
        const hashPassword = createHmac('sha256',salt).update(user.password).digest('hex')
        
        this.sallt = salt
        this.password = hashPassword

         next()

})

userSchema.static('passwordMatch',async function (email,password){

        const user  = await this.findOne({email:email})
        if(!user) throw new Error('User Does Not Exists...');

        const salt = user.sallt;
        const oldPassword = user.password;
        
        const newHashPassword =  createHmac('sha256',salt).update(password).digest('hex')


        if(oldPassword !== newHashPassword) throw new Error('Password Does Not Match')

            return user

})

const userModel = mongoose.model('users',userSchema)

module.exports = userModel