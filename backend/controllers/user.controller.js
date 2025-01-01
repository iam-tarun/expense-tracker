import userService from '../services/user.service.js';

const userController = {
    // Register user
    async registerUser(req, res) {
        try {
            const result = await userService.register(req.body);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Login user
    async loginUser(req, res) {
        try {
            const result = await userService.login(req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Update user
    async updateUser(req, res) {
        try {
            const result = await userService.updateUser(req.params.id, req.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // Delete user
    async deleteUser(req, res) {
        try {
            const result = await userService.deleteUser(req.params.id);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
};

export default userController;
