import RedisService from '../config/redis.js'
import jwtUtil from '../utils/jwt.js';

const authMiddleware = async function (req, res, next) {
  const public_re = /^\/api\/public/;
  const auth_re = /^\/api\/auth/;
   // check for public routes
  if (!public_re.test(req.url) && !auth_re.test(req.url)) {
    // check for jwt token in the https cookies
    const token = req.cookies.jwtToken;
    if (!token) {
      return res.redirect('/api/auth/google')
    }
    const userData = jwtUtil.verifyJWT(token);
    if (userData && userData.userID) {
      const value = await RedisService.client.get(`auth:${userData.userID}:jwt`);
      if (value && value === token) {
        req.user = userData.userID;
        return next();
      }
      // if there is no jwt token, try to fetch the access token
      if (!value) {
        const accessToken = await RedisService.client.get(`auth:${userData.userID}:accessToken`);
        if (accessToken) {
          const jwtToken = jwtUtil.generateJWT({
            userID: userData.userID,
            email: userData.email
          });
          await RedisService.client.set(`auth:${userData.userID}:jwt`, jwtToken, 'EX', 3600);
          res.cookie('jwtToken', jwtToken, {
            sameSite: 'Strict',
            secure: true
          })
          req.user = userData.userID;
          return next();
        }
        else {
          return res.redirect("/api/auth/google")
        }
      }
    }
  }
  else {
    return next()
  }

}

export default authMiddleware;