import User from '../models/userModel.js'

//login user
const loginUser = async (req, res) => {
    res.json({message: 'login user'})
}

//signup user
const signupUser = async (req, res) => {
    res.json({message: 'sign up user'})
}

const userControls = {
    loginUser,
    signupUser
}

export default userControls;