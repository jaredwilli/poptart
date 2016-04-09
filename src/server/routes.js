var router = require('express').Router();
var fs = require('fs');
var four0four = require('./utils/404')();
var data = require('./data');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

router.post('/', uploadFile);

router.get('/people', getPeople);
router.get('/person/:id', getPerson);

router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function uploadFile(req, res, next) {
    console.log(req.files);

    fs.readFile(req.files.displayImage.path, function (err, data) {
        var newPath = __dirname + '/uploads/';
        fs.writeFile(newPath, data, function (err) {
            res.redirect('back');
        });
    });
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}

function getPeople(req, res, next) {
    res.status(200).send(data.people);
}
