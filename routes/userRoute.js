const router = require('express').Router();
const userController = require('../controllers/userController');


const isLoggedin = require('../middlewares/isLoggedin');
const DeleteAccount = require('../middlewares/DeleteAccount')
const UpdateAccount = require('../middlewares/UpdateAccount')




// ---------------------GET LOGGED IN USER
router.get('/', isLoggedin, (req, res, next)=>{    
    res.json({ user: req.user })  
})





router.get('/all', userController.get_all_users);
router.delete('/', DeleteAccount, userController.delete_account);
router.put('/', UpdateAccount, userController.update_profile);





module.exports = router;