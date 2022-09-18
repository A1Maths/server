import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.SECRET, { expiresIn: '1d'} )
}

//login user
const loginUser = async (req, res) => {
    const{email, password} = req.body

    try{
        const user = await User.login(email, password)

        const token = createToken(user._id)

        res.status(200).json({
            email, 
            user,
            token
        })
    } catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

//signup user
const signupUser = async (req, res) => {
    const{ email, password, name, surname, school } = req.body

    try{
        const user = await User.signUp(email, password, name, surname, school)

        const token = createToken(user._id)

        res.status(200).json({
            email, 
            user,
            token
        })
    } catch(error){ 
        res.status(400).json({
            error: error.message
        })
    }
}

const userControls = {
    loginUser,
    signupUser
}

export default userControls;