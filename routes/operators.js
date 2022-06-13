var express = require('express');
var router = express.Router();
var operatorController = require('../controllers/operatorsController');

//Create

router.get('/create', operatorController.create);

router.post('/create', operatorController.save);

//Read

router.get('/login', operatorController.login);

//outer.post('/login', [
 //   check('email').isEmail().wirhMessage('Invalid Email'),
 //   check('password').isLength({min: 8}).wirhMessage('The password must have at least 8 characters')
//] ,operatorController.processLogin);

router.get("/list", operatorController.list);

//Edit

router.get("/edit/:id", operatorController.edit);

router.post("/edit/:id", operatorController.update);



module.exports = router;