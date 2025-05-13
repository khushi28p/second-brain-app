import mongoose, {model, Schema} from 'mongoose';
import { mongoUrl } from './config';

mongoose.connect(`${mongoUrl}`)

const UserSchema = new Schema({
    username: {type:String, unique:true}, 
    password: String
})

export const UserModel = model("User", UserSchema)

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type:mongoose.Types.ObjectId, ref: "Tag"}],
    userId:{
        type: mongoose.Types.ObjectId, 
        ref: "User",
        required: true
    }
})

export const ContentModel = model("Content", ContentSchema);

const LinkSchema = new Schema({
    hash: String,
    userId: {
        type: mongoose.Types.ObjectId, 
        ref: "User",
        required: true, 
        unique: true
    }
})

export const LinkModel = model("Links", LinkSchema);