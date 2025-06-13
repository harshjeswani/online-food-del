import mongoose from "mongoose"

const FoodSchema= new mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    description:{
      type:String,
      required:true
    },
    price:{
      type:Number,
      required:true
    },
    image:{
      type:String,
      required:true,
    },
    category:{
      required:true,
      type:String,
    }

})

const foodModel1=mongoose.model.food || mongoose.model("food",FoodSchema);

export default foodModel1;