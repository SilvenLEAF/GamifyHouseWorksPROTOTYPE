const canDeleteAccount = require('../permissions/canDeleteAccount')


module.exports = DeleteAccount = (req, res, next)=>{
  const {userId } = req.body;
  
  if(!canDeleteAccount(userId, req.user)) return res.status(400).json({ msg: `You can NOT delete this account` });


  next();
}