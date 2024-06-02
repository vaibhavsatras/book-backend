require('dotenv').config()
require('./database/database')
const express = require('express');
const { router } = require('./routers/bookRouter');
const userRoute = require('./routers/userRouter')
const app = express();
const PORT = process.env.PORT || 5000 
const cors = require('cors')

app.use(cors({
    origin: ["https://fornt-end-vbyj.vercel.app"],
    methods:["POST","GET"],
    credential: true
}))

app.use(express.json())

app.get('/home',(req,resp)=>{

        resp.send('Hello Vaibhav')

})

app.use('/',router)
app.use('/user',userRoute)



app.listen(PORT,()=>{console.log(`The Server Is Running on port: ${PORT}`)})
