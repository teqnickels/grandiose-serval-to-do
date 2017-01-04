const config = require('config')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
// const db = pgp(config.postgres)
const db = pgp(`postgres://${process.env.USER}@localhost:5432/grandiose`)


const createProjects =  'INSERT INTO projects (project_name) VALUES ($1) RETURNING *'

const Projects = {
  create: (project_name) => {
    return db.oneOrNone( createProjects, [project_name] )
  }
}
console.log('hello')
module.exports = Projects
