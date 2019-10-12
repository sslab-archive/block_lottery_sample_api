var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post('/eventAuth', function (req, res, next) {
    console.log(req.body);
    var email = req.body['authParams'][0];
    var name = req.body['authParams'][1];
    console.log("email : "+email);
    console.log("name : "+name);

    if (email !=="hea9549@gmail.com" && email!=="osj0580@gmail.com"){
        res.status(400).json({message: 'unknown user'});
        return
    }
    res.status(202).json({authInformation:email+name})

});

module.exports = router;
