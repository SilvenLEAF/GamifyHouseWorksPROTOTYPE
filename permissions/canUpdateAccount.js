module.exports = canUpdateAccount = (userId, user)=>{

  
  // the Demo user can NOT update his account
  if(user.role === 'demo') return false;


  // if he is not the DEMO user, he can update his account
  return true;
  


}