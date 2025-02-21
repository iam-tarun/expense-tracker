import {Router} from 'express'
import passport from 'passport'
import jwtUtil from '../utils/jwt.js';
import RedisService from '../config/redis.js';
const router = Router()

router.get('/google', passport.authenticate('google', { session: false, scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {
  session: false,
  failureRedirect: '/api/auth/google' }), 
  async function(req, res) {
    const user = req.user;
    const jwtToken = jwtUtil.generateJWT({userID: user.userID, email: user.email});
    if (jwtToken) {
      await RedisService.client.set(`auth:${user.userID}:jwt`, jwtToken, 'EX', 3600);
    }
    if (user.accessToken) {
      await RedisService.client.set(`auth:${user.userID}:accessToken`, user.accessToken, 'EX', 7200);
    }
    if (user.refreshToken) {
      await RedisService.client.set(`auth:${user.userID}:refreshToken`, user.refreshToken, 'EX',259200);
    }
    res.status(201).cookie('jwtToken', jwtToken, {
      sameSite: 'Strict',
      secure: true
    }).send({message: "Success"})
  }
)

router.get('/logout', async function(req, res) {
    await RedisService.client.del(`auth:${req.user}:jwt`);
    await RedisService.client.del(`auth:${req.user}:accessToken`);
    await RedisService.client.del(`auth:${req.user}:refreshToken`);
    res.redirect('/api/auth/google')
})

export default router;
