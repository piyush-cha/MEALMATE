import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://technicalpanche:VJngelM8iF7SSp7j@cluster0.og0jduz.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.