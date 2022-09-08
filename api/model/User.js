import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
     email: {
         type: String,
         required: true,
         unique: true,
     },
      password: { 
          type: String,
          required: true,
    }, 
}, {timestamps: true});

const User = mongoose.model("user", userSchema);

export default User