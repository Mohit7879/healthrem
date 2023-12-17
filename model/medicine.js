const mongoose = require('mongoose');

const medicineSchema= new mongoose.Schema({
    medicineName:{
        type:String,
        require:true,
    },


    problem:{
        type:String,
        require:true,
    },


  timings:{
    type:Array,
    require:true,
  }
   

    
})


module.exports.user=mongoose.model('Problem',userSchema);