import mongoose from "mongoose"

const connectDB = ()=>{
mongoose.connect(process.env.dbURI! , ()=> {
    console.log("connected")
})

}

export  {connectDB} 