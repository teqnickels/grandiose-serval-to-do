var express = require('express');
var router = express.Router();
const Projects = require('../database/db.js')


let currentRank = 1

router.get('/', function(req, res, next) {
  Projects.getAll().then(houses => {
    // SORT HOUSES BY RANK REMEMBER ARRAY OF OBJECTS
    sort: (houses) => {
      return a-b
    };
    res.render('index', {
      title: 'Serval',
      houses: houses
    }).catch(error => next(error))
  })
})



router.post('/create-project', (req, res) => {
  Projects.create(req.body.project, currentRank).then(value => {
    currentRank++
    res.redirect('/')
  })
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

router.post('/completed/:id', (req, res) => {

  const isCompleted = req.body.completed === "on" ? true : false

  Projects.completedYes(req.params.id, isCompleted).then(() => {
    res.redirect('/')
  })

  // Projects.completedYes(req.body.completed).then( () =>
  //   res.redirect('/')
  // )
})


module.exports = router;
