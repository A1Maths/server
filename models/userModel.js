import mongoose from 'mongoose';

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    school: {
        type: String
    }
})

const user = mongoose.model('User', userSchema);

export default user;