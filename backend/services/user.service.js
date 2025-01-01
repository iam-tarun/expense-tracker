import { genSalt, hash, compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'; // Assuming User model is in models/User.js

const userService = {
    // Register a new user
    async register({ username, name, email, password }) {
        // Validate password
        if (password.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        // Hash the password
        const salt = await genSalt(10);
        const hashedPassword = await hash(password, salt);

        // Create new user
        const newUser = new User({ name, username, email, password: hashedPassword });
        await newUser.save();

        return { message: 'User registered successfully' };
    },

    // Login user
    async login({ email, password }) {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Validate password
        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid email or password');
        }

        // Generate JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        return { token, user: { id: user._id, name: user.name, email: user.email } };
    },

    // Update user
    async updateUser(userId, updateData) {
        // If password is being updated, hash it
        if (updateData.password) {
            const salt = await genSalt(10);
            updateData.password = await hash(updateData.password, salt);
        }

        // Update user in database
        const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }

        return updatedUser;
    },

    // Delete user
    async deleteUser(userId) {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            throw new Error('User not found');
        }

        return { message: 'User deleted successfully' };
    },
};

export default userService;
