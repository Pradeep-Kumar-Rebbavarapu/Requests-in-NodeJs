import express from "express";
import https from "https";
const app = express();
app.get('/',(req,res)=>{
    let AllPosts = []
    https.get('https://jsonplaceholder.typicode.com/todos',(response)=>{
        var body = "";
        response.on("data",(data)=>{
            body = body + data.toString('utf8');
            
        })
        response.on('end',()=>{
            res.send(JSON.parse(body))
        })
    })
   
    
})

app.listen(3000,()=>{
    console.log('server started')
})