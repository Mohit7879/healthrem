const express= require('express');
const mongoose =require('mongoose');
const port=6000;
const app=express();
const router=require('./routes/index.js')
//GPtyl2XxmOFmu8XI
//mongodb+srv://mohityadavkkn25:GPtyl2XxmOFmu8XI@healthremainder.kihqg3i.mongodb.net/healthremainder?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://mohityadav:kJUgEFqwrto0XUYW@realestatec.fupwuxe.mongodb.net/realestate?retryWrites=true&w=majority")
.then(()=> {
    console.log("App is now connected to DB")
}).catch((err)=> {
    console.log(`${err}`);
})

app.get('/api',function(req,res){
    return res.send('running')
 })



app.listen(port,(err)=>{
    console.log('server is successful',port);
    if(err){
        console.log(err);
    }
})

