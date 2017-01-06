var express = require('express');
var router = express.Router();
const Projects = require('../database/db.js')


let currentRank = 1

router.get('/', function(req, res, next) {
  Projects.getAll().then(houses => {
    // SORT HOUSES BY RANK REMEMBER ARRAY OF OBJECTS

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

  Projects.completedYes(req.params.id, isCompleted).then( () => {
    res.redirect('/')
  })
})

router.post('/up/:id', (req, res) => {
    Projects.getOrderedIds()
      .then( ids => {
        const index = ids.findIndex( element =>
          element.id === parseInt( req.params.id )
        )

        // swap with previous element
        const temp = ids[ index - 1 ]
        ids[ index - 1 ] = ids[ index ]
        ids[ index ] = temp

        // Then I want to reset rank of everything in the current order
        return ids.map( (object, rank) => ({ id: object.id, rank }))
      })
      .then( Projects.updateRanks )
      .then( whocares => res.redirect( '/' ))


    // console.log('req.body', req.params.id)
    // console.log("IT WORKS")
    //
    // Projects.up(req.params.id).then( () =>
    //   res.redirect('/')
    // )
    // .catch(error => res.json(error))
})


module.exports = router;
