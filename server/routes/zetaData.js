var express= require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/zetanumber_info');
mongoose.model('Person', new Schema({"name": String, "location": String, "favorite_number": String}, {collection: 'zeta'}));
var Person = mongoose.model('Person');

router.route('/')
    .get(function(req, res){
        //console.log("hi");
        Person.find({}, function(err, data){
            if(err) console.log("Error: ", err);
            //console.log("on the other side");
            res.send(data);
        });
    });


module.exports = router;