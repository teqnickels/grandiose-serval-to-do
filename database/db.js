const config = require('config')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(config.postgres)

const createProjects =  'INSERT INTO projects (id, project_name) VALUES ($1, $2) RETURNING *'
