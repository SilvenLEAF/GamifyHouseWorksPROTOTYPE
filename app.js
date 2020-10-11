if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}
const chalk = require('chalk');

const express = require('express');
const path = require('path');


// ------------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, `client/build`)))




/* ------------------------------------- 
.                   config
------------------------------------- */
require('./config/mongoDBconfig');






/* ------------------------------------- 
.                   routes
------------------------------------- */



// catch all handler
app.get('*', (req, res, next)=>{
  try {
    res.sendFile(path.join(__dirname, 'client/build'))
  } catch(err){
    next(err, req, res);
  }
})



// errors handling
app.use((err, req, res, next)=>{
  console.log(err.message);
  console.log(err);
  res.json({ msg: `Server error`, error: err.message })
})











// ------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
})