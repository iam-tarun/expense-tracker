import User from "../models/user.model.js";


const userService = {
    async findOrCreateUser(profile) {
        const user = await User.findOne({email: profile?.emails[0]?.value});

        if (!user) {
            const user = new User({
                name: profile?.displayName,
                email: profile?.emails[0]?.value,
                profilePic: profile?.photos[0]?.value
            });
            await user.save();
            return {email: user.email, userID: user.id};            
        }

        return {email: user.email, userID: user.id};
    }
};

export default userService;
