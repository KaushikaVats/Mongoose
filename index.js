const mongoose = require("mongoose")
const user_model=require("./models/user.model")


mongoose.connect("mongodb://localhost/mongo_db");

const db= mongoose.connection;
db.once("open",()=>{
    console.log("Yaay! Connected to MongoDB")
  init();
  //dbQueries();
})
db.on("error",()=>{
console.log("error while connecting to DB")
})

//defining init function

async function init(){
  const  user_obj={
    name:"Vishwa",
    age :98,
    email:"mohan123@gmail.com",
    subjects:["Physics" , "Chemistry" , "Maths"],
    address:{
      lane1:"Lane1",
      Lane2:"Lane2",
      lane3:"OMR",
      country:"India",
      pincode:546789
    }
   }
  try{
    const user = await user_model.create(user_obj);
    console.log("User created" , user) 
    }catch(err){
        console.log("Error occurred " , err)
    }
  }
// async function dbQueries(){
//  try{
//     const users =await user_model.findOne({name:"Vishwa"})
//     console.log(users)

//  }catch(err){
//     console.log("Error while reading from the DB", err)
//  }
// }
// async function dbQueries(){
//   try{
//     const users = await user_model.where("age").gt("31").where("name").equals("Vishwa").limit(3)
//     console.log(users)
//   }catch(err){
//   console.log("Error while reading the data from the DB",err)
  
//   }
//   }
//  async function dbQueries(){

// try{
//   const user = await user_model.findOne({name:"Vishwa" })
//     user.hobby= "Paying Cricket"
//     user.email= "maf123@gmail.com"

// const user_updated = await user.save()
// console.log(user_updated)

// }catch(err){
//   console.log("eroor while updating the DB " ,err)
// }
// }
// async function dbQueries(){
// const userRec = await user_model.deleteOne({name:"Vishwa"})
// const users = await user_model.find({name:"Vishwa"});
// }