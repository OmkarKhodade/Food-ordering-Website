// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken"
// import bcrypt from "bcrypt"
// import validator from "validator"


// // login user

// const loginUser = async (req, res) => {

//     const { email, password } = req.body;
//     try {

//         const user = await userModel.findOne({ email });
//         if (!user) {
//             return res.json({
//                 success: false,
//                 message: "User Does Not Exist"
//             })

//             const isMatch = await bcrypt.compare(password, user.password);

//             if (!isMatch) {
//                 return res.json({
//                     success: false,
//                     message: "Invalid Password"
//                 })
//             }
//             const token = createToken(user._id);
//             res.json({
//                 success: true,
//                 token
//             })


//         } 
// catch (error) {
//             console.log(error);
//             res.json({
//                 success: false,
//                 message: "Error"
//             })

//         }

//     }

// const createToken = (id) => {
//         return jwt.sign({ id }, process.env.JWT_SECRET)
//     }

//     //register user

//     const registerUser = async (req, res) => {

//         const { name, password, email } = req.body;
//         try {
//             // checking is user already exists

//             const exists = await userModel.findOne({ email });
//             if (exists) {
//                 return res.json({
//                     success: false,
//                     message: "User Already Exist"
//                 })
//             }

//             // Validating email format and strong password
//             if (!validator.isEmail(email)) {
//                 return res.json({
//                     success: false,
//                     message: "Enter Valid Email"
//                 })
//             }

//             if (password.length < 8) {
//                 return res.json({
//                     success: false,
//                     message: "Please Enter Strong Password"
//                 })
//             }

//             // hashing user password

//             const salt = await bcrypt.genSalt(10)
//             const hashedPassword = await bcrypt.hash(password, salt)

//             const newUser = new userModel({
//                 name: name,
//                 email: email,
//                 password: hashedPassword
//             })

//             const user = await newUser.save()
//             const token = createToken(user._id)
//             res.json({
//                 success: true,
//                 token
//             })


//         } catch (error) {
//             console.log(error)
//             res.json({
//                 success: false,
//                 message: "Error"
//             })

//         }

//     }


//     export { loginUser, registerUser }










import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// Create a token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({
                success: false,
                message: "User Does Not Exist",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({
                success: false,
                message: "Invalid Password",
            });
        }

        const token = createToken(user._id);
        res.json({
            success: true,
            token,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error",
        });
    }
};

// Register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        // Check if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({
                success: false,
                message: "User Already Exist",
            });
        }

        // Validate email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Enter Valid Email",
            });
        }

        if (password.length < 8) {
            return res.json({
                success: false,
                message: "Please Enter Strong Password",
            });
        }

        // Hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({
            success: true,
            token,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error",
        });
    }
};

export { loginUser, registerUser };
