const db = require("../database/models");
const Operator = db.Operator;
const bcryptjs = require("bcryptjs");



let operatorsController = {
    create: function(req, res){
        
       return res.render('createOperators');

    },
    save: async (req, res) => {
        const data = {
            name: req.body.name ,
            surname: req.body.surname,
            userName: req.body.userName,
            password: bcryptjs.hashSync(req.body.password, 10),
            status: req.body.status,
            //creationDate: req.body.creationDate,
            //lastLoginDate: req.body.lastLoginDate
        };
        console.log(data);
        try {
            await Operator.create(data);
            return res.render("/operators");
        }catch (err) {
            return res.send(err);
        }
    },
    login: function (req, res) {
        return res.render('index');
    },
    //processLogin: function (req, res) {
     //   let errors = validationResult(req);

      //  if(errors.isEmpty()){

       // } else {
       //     return res.render('index', {errors: errors.errors})
       // }
    //},
    list: function (req, res){
        db.Operator.findAll()
            .then(function(){
                res.render("listOperators", {operators})
            })
    },
    edit: function (req, res){
        let pedidoOperators = db.Operator.findByPk(req.params.id);

        res.render("editOperator", {operators});
    },
    update: function (req, res) {
        db.Operator.update({
            name: req.body.name ,
            surname: req.body.surname,
            userName: req.body.userName,
            password: bcryptjs.hashSync(req.body.password, 10),
            status: req.body.status,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/operators/' + req.params.id);
    }

};

module.exports = operatorsController;

