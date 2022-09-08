import mongoose from 'mongoose';

const Schema = mongoose.Schema

const loginSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

const loginUser = mongoose.model('User', loginSchema);

export default loginUser;