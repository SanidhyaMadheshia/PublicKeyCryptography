const express=require("express");
const signMessage =require("./signMessage");

const recoveryKey=require("./recoveryKey");

const getAddress=require("./getAddress");


const app=express();

app.use(express.json());



app.get("/api/sign", async (req,res)=>{
    try{

        const {message } = req;
    
        const [sign, recoveryBit] = await signMessage(message );
    
    
        const pubKey = await recoveryKey(message , sign , recoveryBit);
    
        res.json({
            pubKey,
            sign
    
        });
    }catch(err){

        res.status(404).json({
            err : err.message
        })
    }






});



app.get("/api/getAddress",(req,res)=>{
    const {pubKey}=req;

    try{
        const address= getAddress(pubKey);
        res.json({
            address
        });


        
    }catch(err){
        res.status(404).json({

            err : err.message        
        });

    }
})

app.listen(3000);