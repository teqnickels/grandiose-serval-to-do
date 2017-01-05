const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(`postgres://${process.env.USER}@localhost:5432/grandiose`)


const createProjects =  'INSERT INTO projects (project_name) VALUES ($1) RETURNING *'

const allProjects = 'SELECT project_name FROM projects'
const updateName = 'UPDATE projects SET project_name=$1 WHERE'

const Projects = {
  create: (projectName) => {
    return db.oneOrNone( createProjects, [projectName] )
  },
  getAll: () => {
    return db.any(allProjects)
  }
}

// Projects.getAll().then( blob => console.log('ALL THIS STUFF', blob) )


console.log('hello')
module.exports = Projects
