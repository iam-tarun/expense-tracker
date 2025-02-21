import passport from 'passport'
import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
import { config } from 'dotenv';
import userService from './user.service.js';


config();
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL
  },

  async function(accessToken, refreshToken, profile, cb) {
    const user = await userService.findOrCreateUser(profile);
    
    return cb(null, {...user, accessToken, refreshToken});
  }
));

export default passport