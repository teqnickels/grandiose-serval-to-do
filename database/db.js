const pgPromise = require('pg-promise')
const pgp = pgPromise()

const db = pgp(`postgres://${process.env.USER}@localhost:5432/grandiose`)


const createProjects =  'INSERT INTO projects (project_name, rank) VALUES ($1, $2) RETURNING *'

const allProjects = 'SELECT * FROM projects ORDER BY rank'
const orderedIdsQuery = 'SELECT id FROM projects ORDER BY rank'
const updateName = 'UPDATE projects SET project_name=$1 WHERE id=$2 RETURNING *'
const deleteItemSQL = 'DELETE from projects WHERE id = $1'

const finishedTask ='UPDATE projects SET completed=$2 WHERE id=$1'

const updateRankQuery = 'UPDATE projects SET rank=${rank} WHERE id=${id}'

const Projects = {
  create: (projectName, rank) => {
    return db.oneOrNone( createProjects, [projectName, rank] )
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
  finishedTask: (id, isCompleted) => {
    return db.one(finishedTask, [id, isCompleted] )
  },
  updateRanks: newRanks => Promise.all(
    newRanks.map( newRank => db.any( updateRankQuery, newRank ))
  ),
  getOrderedIds: () => db.any( orderedIdsQuery )
}

module.exports = Projects
