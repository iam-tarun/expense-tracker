import jwt from 'jsonwebtoken'
import { config } from 'dotenv';

config();


const jwtUtil = {
  generateJWT: function(data) {
    return jwt.sign(data, process.env.JWT_SECRET_KEY);
  },
  verifyJWT: function(token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  }
}

export default jwtUtil;