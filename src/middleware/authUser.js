// const jwt = require("jsonwebtoken");


// const authIsUser = (req, res, next) => {
//   const token = req.cookies.jwt
//   if (token) {
//     jwt.verify(token, jwtSecret, (err, decodedToken) => {
//       if (err) {
//         return res.status(401).json({ message: "Not authorized" })
//       } else {
//         if (decodedToken.role !== "USER") {
//           return res.status(401).json({ message: "Not authorized" })
//         } else {
//           next()
//         }
//       }
//     })
//   } else {
//     return res
//       .status(401)
//       .json({ message: "Not authorized, token not available" })
//   }
// };

// module.exports = authIsUser;