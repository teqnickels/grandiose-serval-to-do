var express = require('express');
var router = express.Router();
const Projects = require('../database/db.js')
// console.log('This is Create', Projects.create(288, 'TESTEST'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Serval' })
})

router.post('/create-project', (req, res) => {
  const {project} = req.body
  Projects.create(project).then(value => res.json(value))
})

module.exports = router;
