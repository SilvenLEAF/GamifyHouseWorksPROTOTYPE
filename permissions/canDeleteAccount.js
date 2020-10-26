module.exports = canDeleteAccount = (userId, user)=>{

  
  // the Demo user can NOT delete his account
  if(user.role === 'demo') return false;


  // if he is not the DEMO user, he can delete his account
  return true;
  


}


