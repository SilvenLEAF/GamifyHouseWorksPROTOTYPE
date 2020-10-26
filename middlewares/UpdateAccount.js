const canUpdateAccount = require('../permissions/canUpdateAccount')


module.exports = UpdateAccount = (req, res, next)=>{
  const {userId } = req.body;
  
  if(!canUpdateAccount(userId, req.user)) return res.status(400).json({ msg: `You can NOT update this account` });


  next();
}