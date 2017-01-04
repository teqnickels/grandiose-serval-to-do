const config = require('config')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp(config.postgres)
