


const authIsUser = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === "USER" || req.user.role === "ADMIN") {  // admin & user can do same
    return next();
  }
  res.status(401).json({ error: "Not Authorized" });
};

<<<<<<< HEAD
module.exports = authIsUser;
=======


module.exports = authIsUser;
>>>>>>> parent of 0c93936... more modifications authentications
