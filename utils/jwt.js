import jwt from "jsonwebtoken";
export default {
  SIGN: (payload) => {
    return jwt.sign(payload, process.env.SECRET, { expiresIn: '3600000' })
  },
  VERIFY: (token) => {
    try {
      if (jwt.verify(token, process.env.SECRET) instanceof Error) return 0
      else return 1
    } catch (error) {
      return 0
    }
  },
}