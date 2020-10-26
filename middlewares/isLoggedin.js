module.exports = isLoggedin = (req, res, next)=>{
  if(!req.user) return res.status(401).json({ msg: `Please log in to access it` });

  next();
}