const mongoose = require('mongoose');

const problemSchema= new mongoose.Schema({
    problem:{
        type:String,
        require:true,
    },


    medicine:[
        {
            type:mongoose.Types.ObjectId,
            require:true,
        
        }
    ],
   

    
})


module.exports.user=mongoose.model('Problem',userSchema);
