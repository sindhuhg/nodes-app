const express = require('express')
const router = express.Router()
const categoriesController = require('../app/controllers/categoriesController')
const notesController=require('../app/controllers/notesController')
const usersController=require('../app/controllers/usersController')
const {authenticateUser}=require('../app/middlewares/authentication')

router.get('/category',authenticateUser, categoriesController.list)
router.post('/category', authenticateUser,categoriesController.create)
router.get('/category/:id', authenticateUser,categoriesController.show)
router.put('/category/:id', authenticateUser,categoriesController.update)
router.delete('/category/:id', authenticateUser,categoriesController.destroy)

router.get('/note', authenticateUser,notesController.list)
router.post('/note',authenticateUser, notesController.create)
router.get('/note/:id',authenticateUser, notesController.show)
router.put('/note/:id', authenticateUser,notesController.update)
router.delete('/note/:id', authenticateUser,notesController.destroy)

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser,usersController.account)
router.delete('/users/logout',authenticateUser, usersController.logout)


module.exports = router