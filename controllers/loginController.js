import User from '../models/userModel.js'

//login user
const loginUser = async (req, res) => {
    res.json({message: 'login user'})
}

//signup user
const signupUser = async (req, res) => {
    const { email, password, name, surname, school } = req.body

    try {
        const user = await User.signUp(email, password, name, surname, school)

        res.status(200).json({
            email, 
            user
        })
    } catch(error) { 
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