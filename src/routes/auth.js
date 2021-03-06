const express = require('express')
const router = express.Router()
const authController = require('../controller/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
// router.get('/', authController.isAuthenticated)
// router.get('/:id',
//   authController.isAuthenticated,
//   authController.isSelf,
//   function(req, res, next){
//     res.send({ id: req.claim.id, message: "For your eyes only"})
//   }
// )

router.get('/token', authController.isAuthenticated, authController.getAuthStatus)
router.post('/token', authController.login)



module.exports = router
