var express = require('express');
var router = express.Router();
const Projects = require('../database/db.js')
// console.log('This is Create', Projects.create(288, 'TESTEST'))

/* GET home page. */
router.get('/', function(req, res, next) {
  Projects.getAll().then(houses => {
    // console.log('housesss', house)
    res.render('index', {
      title: 'Serval',
      houses: houses
    }).catch(error => next(error))
  })
})

router.post('/create-project', (req, res) => {
  Projects.create(req.body.project).then(value => res.json(value))
})


module.exports = router;
