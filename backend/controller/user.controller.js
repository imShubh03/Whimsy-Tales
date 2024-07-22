import User from "../model/user.model.js";
import bcrypt from 'bcryptjs';

// Signup function
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists by matching the email
        const user = await User.findOne({ email });

        // If user exists, return error
        if (user) {
            return res.status(400).json({ message: "Hey, user already exists" });
        }

        // Before creating, hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // If user doesn't exist, create a new one
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        });

        // Save new user to database
        await createUser.save();

        res.status(201).json({ 
            message: "User created successfully",
            user: {
                _id: createUser._id,
                fullname: createUser.fullname,
                email: createUser.email,
            } 
        });

    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Login function
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Login attempt with email:", email);

        // Check if user exists
        const user = await User.findOne({ email });

        // Log the user data retrieved
        console.log("User found:", user);

        // If user doesn't exist, return error
        if (!user) {
            console.log("User not found");
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Check if the password matches
        const isMatched = await bcrypt.compare(password, user.password);

        // Log the comparison result
        console.log("Password match result for email:", email, "isMatched:", isMatched);

        // If password doesn't match, return error
        if (!isMatched) {
            console.log("Password mismatch for email:", email);
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // If login is successful, return user details
        return res.status(200).json({
            message: "Login successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.log("Error", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
