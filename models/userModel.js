import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

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
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: false
    }
})

//static signup method
userSchema.statics.signUp = async function(email, password, name, surname, school) {

    //validation
    if (!email || !password || !name || !surname){
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }
    //checkout  isAlphaLocales for ignoring hyphenated names and 's
    if (!validator.isAlpha(name)){
        throw Error('Name can only contain letters')
    }
    if (!validator.isAlpha(surname)){
        throw Error('Name can only contain letters')
    }
    // need to allow for empty fields for school
    // if (!validator.isAlpha(school)){
    //     throw Error('Name can only contain letters')
    // }

    const exists = await this.findOne({
        email
    })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const newUser = await this.create({
        email, 
        password: hash,
        name,
        surname,
        school
    })

    return newUser
}


const user = mongoose.model('User', userSchema);

export default user;