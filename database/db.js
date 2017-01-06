const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/grandiose`)


const createProjects =  'INSERT INTO projects (project_name) VALUES ($1) RETURNING *'

const allProjects = 'SELECT * FROM projects'
const updateName = 'UPDATE projects SET project_name=$1 WHERE id=$2 RETURNING *'
const deleteItemSQL = 'DELETE from projects WHERE id = $1'

const completedYes ='UPDATE projects SET completed = true WHERE id=$1'
const completedNo ='UPDATE projects SET completed = false WHERE id=$1'


const Projects = {
  create: (projectName) => {
    return db.oneOrNone( createProjects, [projectName] )
  },
  getAll: () => {
    return db.any( allProjects )
  },
  deleteItem: (id) => {
    return db.none( deleteItemSQL, [id] )
  },
  update: (projectName, id) => {
    return db.one(updateName, [projectName, id] )
      .then( result => result[0] )
  },
  completedYes: (id) => {
    return db.one(completedYes, [id] )
  }
}

// Projects.getAll().then( blob => console.log('ALL THIS STUFF', blob) )


console.log('hello')
module.exports = Projects
