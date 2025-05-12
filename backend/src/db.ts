import mongoose, {model, Schema} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGODB_URI;

mongoose.connect(`${mongoUrl}`)

const UserSchema = new Schema({
    username: {type:String, unique:true}, 
    password: {type:String}
})

export const UserModel = model("User", UserSchema)