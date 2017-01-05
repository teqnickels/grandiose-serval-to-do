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
  Projects.create(req.body.project).then(value => res.redirect('/'))
})

router.post('/delete/:id', (req, res) => {
  console.log('req.body', req.params.id)
  Projects.deleteItem(req.params.id).then( () =>
    res.redirect('/')
  )
  .catch(error => res.json(error))
})

router.post('/updateName/:id', (req, res) => {
  Projects.update(req.body.editedName, req.params.id).then( () =>
    res.redirect('/')
  )
  .catch(error => res.json(error))
})


module.exports = router;
