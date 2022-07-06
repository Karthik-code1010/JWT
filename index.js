const express = require("express");
const jsonwebtoken = require("jsonwebtoken");
const app = express();



app.get("/",async(req,res)=>{

    let token = await jsonwebtoken.sign({
        date: new Date
    },"kjkjkjkjkjjhjhjhjhjhjhlj",{
        expiresIn: 60
    })
    console.log(token);
    res.json({
        message: "Success",
        token
    })
})
app.get("/check/:token", async (req, res)=>{
    console.log(req.params.token);
    let token = req.params.token;

    try{
        
    let tokenResult = await jsonwebtoken.verify(token,"kjkjkjkjkjjhjhjhjhjhjhlj")
    console.log(tokenResult);
        if(tokenResult)
        {
            res.json({
                message: "Success",
                date: new Date(tokenResult.date).getDate(),
             
            });

        }else{
            res.status(500).json({
                message: "Something Error"
            })
    
        }
        
    } catch (error){
        res.status(401).json({
            message: "error"
        })

    }

  

})
app.listen(3200,()=>{
    console.log("Server listening in PORT 3000");
})